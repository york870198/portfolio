import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { resolve, sep, extname } from 'node:path'

// Local acceptance server: directory redirects and the built HTTP 404 shell,
// without Vite's history fallback. No deploy or external network binding.
const root = fileURLToPath(new URL('../../dist/', import.meta.url))
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon' }
createServer(async (request, response) => {
  const url = new URL(request.url, 'http://127.0.0.1:4180')
  if (!url.pathname.startsWith('/portfolio/')) {
    response.writeHead(404).end('Not found')
    return
  }
  try {
    const path = resolve(root, decodeURIComponent(url.pathname.slice('/portfolio/'.length)))
    if (path !== resolve(root) && !path.startsWith(resolve(root) + sep)) {
      response.writeHead(404).end('Not found')
      return
    }
    let file = path
    if ((await stat(path)).isDirectory()) {
      if (!url.pathname.endsWith('/')) {
        response.writeHead(301, { Location: url.pathname + '/' + url.search }).end()
        return
      }
      file = resolve(path, 'index.html')
    }
    response.writeHead(200, { 'Content-Type': types[extname(file)] ?? 'application/octet-stream' })
    response.end(await readFile(file))
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/html' })
    response.end(await readFile(resolve(root, '404.html')))
  }
}).listen(4180, '127.0.0.1', () => console.log('Static acceptance: http://127.0.0.1:4180/portfolio/'))
