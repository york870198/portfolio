import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises'
import ts from 'typescript'

const root = new URL('../', import.meta.url)
const inventory = JSON.parse(await readFile(new URL('.scratch/multilingual/content-inventory.json', root), 'utf8'))
const revisions = JSON.parse(await readFile(new URL('.scratch/multilingual/editorial-revisions.json', root), 'utf8'))

async function loadCatalog(name) {
  // Use the project's existing TypeScript compiler; no runtime i18n dependency
  // is needed to verify the dictionaries before ticket 02 installs Vue I18n.
  const source = await readFile(new URL(`src/i18n/locales/${name}.ts`, root), 'utf8')
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } })
  return (await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`)).default
}

function flatten(messages, prefix = '', result = {}) {
  for (const [key, value] of Object.entries(messages)) {
    const path = prefix ? `${prefix}.${key}` : key
    if (typeof value === 'string') {
      assert.ok(value.trim(), `Empty message: ${path}`)
      result[path] = value
    } else {
      assert.ok(value && typeof value === 'object' && !Array.isArray(value), `Invalid message group: ${path}`)
      flatten(value, path, result)
    }
  }
  return result
}

function placeholders(message, key) {
  const names = [...message.matchAll(/\{([a-zA-Z][a-zA-Z0-9]*)\}/g)].map(match => match[1]).sort()
  assert.ok(!/[{}]/.test(message.replace(/\{'\|'\}|\{([a-zA-Z][a-zA-Z0-9]*)\}/g, '')), `Malformed interpolation: ${key}`)
  assert.ok(!/[<>@]/.test(message), `Use slots or named interpolation instead of HTML or literal @: ${key}`)
  return names
}

const zh = flatten(await loadCatalog('zh-TW'))
const en = flatten(await loadCatalog('en'))
assert.deepEqual(Object.keys(en).sort(), Object.keys(zh).sort(), 'Locale keys must match exactly')

for (const [key, original] of Object.entries(zh)) {
  assert.deepEqual(placeholders(en[key], key), placeholders(original, key), `Interpolation mismatch: ${key}`)
  assert.ok(!/[\u3400-\u9fff]/u.test(en[key]), `Untranslated Chinese in English message: ${key}`)
  // Keep original technical names and numeric facts, even inside mixed prose.
  for (const token of original.match(/[A-Za-z][A-Za-z0-9]*|\d+\+?/g) ?? []) {
    if (revisions.englishTokenExceptions[key]?.includes(token)) continue
    const expected = revisions.englishTokenAliases?.[key]?.[token] ?? token
    assert.ok(en[key].includes(expected), `Original name or number '${token}' missing in ${key}`)
  }
}

const normalize = value => value.replace(/\s+/g, ' ').trim()
const fixedSources = new Map(await Promise.all(
  [...new Set(inventory.items.filter(item => item.category === 'fixed').map(item => item.file))]
    .map(async file => [file, normalize(await readFile(new URL(file, root), 'utf8'))])
))
const used = new Set()
for (const key of revisions.addedKeys ?? []) {
  assert.ok(key in zh, `Missing new UI message: ${key}`)
  used.add(key)
}
for (const item of inventory.items) {
  assert.ok(['fixed', 'translatable'].includes(item.category), `Unclassified source: ${item.file}:${item.line}`)
  if (item.category === 'fixed') {
    // Approved content cuts can retire a fixed phrase in one reading version.
    if (revisions.retiredFixedText?.some(retired => retired.file === item.file && retired.original === item.original)) continue
    assert.ok(fixedSources.get(item.file).includes(item.original), `Fixed design text changed: ${item.file}:${item.line} '${item.original}'`)
    continue
  }
  if (revisions.retiredKeys.includes(item.key)) {
    assert.ok(!(item.key in zh), `Retired Resume message remains: ${item.key}`)
    continue
  }
  assert.ok(item.key in zh, `Unmapped source: ${item.file}:${item.line}`)
  used.add(item.key)
  const rendered = zh[item.key].replace(/\{'\|'\}/g, '|').replace(/\{([a-zA-Z][a-zA-Z0-9]*)\}/g, (match, slot) => inventory.slotDefaults[slot] ?? match)
  if (item.key in revisions.chinese) {
    assert.equal(rendered, revisions.chinese[item.key], `Chinese wording differs from approved edit: ${item.key}`)
  } else {
    assert.ok(normalize(rendered).includes(item.original), `Chinese wording differs from baseline: ${item.key}`)
  }
}
assert.deepEqual([...used].sort(), Object.keys(zh).sort(), 'Every message must have an inventoried source')

// Ticket 01 also promises zero changes to the existing website. This optional
// check is intentionally omitted when later tickets wire messages into views.
if (process.argv.includes('--source-baseline')) {
  for (const [file, expected] of Object.entries(inventory.sourceHashes)) {
    const source = await readFile(new URL(file, root))
    assert.equal(createHash('sha256').update(source).digest('hex'), expected, `Website source changed: ${file}`)
  }
}

console.log(`Locale check passed: ${Object.keys(zh).length} messages, matching keys/interpolations, complete source coverage, ${inventory.items.filter(item => item.category === 'fixed').length} fixed-text occurrences.`)
