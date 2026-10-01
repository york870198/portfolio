import { copyFile, mkdir } from 'node:fs/promises'

// GitHub Pages serves files rather than rewriting history-mode routes to index.html.
// Keep these entries aligned with the public routes in src/router/index.ts.
const routes = ['who', 'when', 'what', 'where', 'why', 'how', 'resume', 'about']
const output = new URL('../dist/', import.meta.url)
const entry = new URL('index.html', output)

for (const route of routes) {
  const directory = new URL(`${route}/`, output)
  await mkdir(directory, { recursive: true })
  await copyFile(entry, new URL('index.html', directory))
}

// Unknown routes still receive HTTP 404 and render the application's not-found page.
await copyFile(entry, new URL('404.html', output))
