import { fileURLToPath, URL } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// Preload the latin Work Sans file so text doesn't wait for CSS to discover it.
function preloadLatinFont(): Plugin {
  let base = '/'
  return {
    name: 'preload-latin-font',
    apply: 'build',
    configResolved(config) { base = config.base },
    transformIndexHtml: {
      order: 'post',
      handler(_html, { bundle }) {
        const font = Object.keys(bundle ?? {}).find(file => /work-sans-latin-wght-normal-[\w-]+\.woff2$/.test(file))
        if (!font) return
        return [{ tag: 'link', attrs: { rel: 'preload', as: 'font', type: 'font/woff2', href: base + font, crossorigin: '' }, injectTo: 'head' }]
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Compiles locale messages at build time and ships the runtime-only vue-i18n.
    VueI18nPlugin({ include: [fileURLToPath(new URL('./src/i18n/locales/**', import.meta.url))], dropMessageCompiler: true }),
    preloadLatinFont()
  ],
  base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
