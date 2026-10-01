import { describe, expect, it } from 'vitest'
import { localizedTarget, normalizeLocaleRoute, resolveLocale, switchLocaleTarget } from '../src/i18n/locale'

describe('website language from the URL', () => {
  it('defaults old, unsupported, empty and repeated language queries to Traditional Chinese', () => {
    for (const lang of [undefined, null, '', 'fr', 'EN', ['en'], ['en', 'zh-TW']]) {
      expect(resolveLocale(lang)).toBe('zh-TW')
    }
    expect(resolveLocale('en')).toBe('en')
    expect(resolveLocale('zh-TW')).toBe('zh-TW')
  })

  it('cleans an invalid language and trailing slash together without losing other query or hash', () => {
    expect(normalizeLocaleRoute({ path: '/who/', query: { lang: ['en', 'en'], source: 'cv' }, hash: '#intro' }))
      .toEqual({ path: '/who', query: { source: 'cv' }, hash: '#intro', replace: true })
    expect(normalizeLocaleRoute({ path: '/who', query: { lang: 'en' }, hash: '' })).toBeUndefined()
    expect(normalizeLocaleRoute({ path: '/', query: {}, hash: '' })).toBeUndefined()
  })

  it('carries only language to the destination, keeping destination query/hash and explicit language', () => {
    const current = { path: '/resume', query: { lang: 'en', print: 'true', auto: 'true' }, hash: '' }
    expect(localizedTarget({ path: '/who', query: { source: 'home' }, hash: '#intro' }, current))
      .toEqual({ path: '/who', query: { source: 'home', lang: 'en' }, hash: '#intro' })
    expect(localizedTarget({ path: '/', query: { lang: 'zh-TW' }, hash: '' }, current).query)
      .toEqual({ lang: 'zh-TW' })
    expect(localizedTarget({ path: '/resume', query: { print: 'true' }, hash: '' }, current).query)
      .toEqual({ print: 'true', lang: 'en' })
    for (const lang of ['fr', ['en']]) {
      expect(localizedTarget({ path: '/', query: {}, hash: '' }, { ...current, query: { lang } }).query).toEqual({})
    }
    expect(localizedTarget({ path: '/', query: {}, hash: '' }, { query: {} }).query).toEqual({})
    expect(localizedTarget({ path: '/', query: {}, hash: '' }, { ...current, query: { lang: 'zh-TW' } }).query)
      .toEqual({ lang: 'zh-TW' })
  })

  it('switches language on the same page while retaining other query parameters and hash', () => {
    expect(switchLocaleTarget({ path: '/resume', query: { lang: 'en', print: 'true', source: 'cv' }, hash: '#section-who' }, 'zh-TW'))
      .toEqual({ path: '/resume', query: { lang: 'zh-TW', print: 'true', source: 'cv' }, hash: '#section-who' })
  })
})
