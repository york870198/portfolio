import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createApp, nextTick, type App as VueApp } from 'vue'
import { createMemoryHistory } from 'vue-router'
import { createPortfolioRouter } from '../src/router'
import i18n from '../src/i18n'
import App from '../src/App.vue'
import { readFileSync } from 'node:fs'

const inventory: { items: { file: string; category: string; original: string }[] } = JSON.parse(
  readFileSync('.scratch/multilingual/content-inventory.json', 'utf8')
)
const viewSources: Record<string, string> = {
  '/': 'Home', '/who': 'Who', '/when': 'When', '/what': 'What', '/where': 'Where',
  '/why': 'Why', '/how': 'How', '/resume': 'Resume', '/missing': 'NotFound'
}

function expectFixedText(path: string) {
  const scope = document.querySelector('main')!.textContent!.replace(/\s+/g, ' ')
  for (const item of inventory.items.filter(item => item.category === 'fixed' && item.file === `src/views/${viewSources[path]}View.vue`)) {
    expect(scope, `${item.file}: ${item.original}`).toContain(item.original)
  }
  expect(document.querySelector('.app-footer')!.textContent).toContain('Portfolio. Built with Vue 3 & TypeScript.')
}

let app: VueApp | undefined
beforeEach(() => {
  document.body.innerHTML = '<div id="test-app"></div>'
  vi.stubGlobal('matchMedia', () => ({ matches: false, addEventListener() {}, removeEventListener() {} }))
  vi.stubGlobal('scrollTo', vi.fn())
  vi.stubGlobal('print', vi.fn())
})
afterEach(() => { app?.unmount(); app = undefined; vi.useRealTimers(); vi.unstubAllGlobals() })

async function mountSite(url: string) {
  const router = createPortfolioRouter(createMemoryHistory('/portfolio/'))
  await router.push(url)
  app = createApp(App).use(i18n).use(router)
  await router.isReady()
  app.mount('#test-app')
  await nextTick()
  return router
}

describe('localized reading experience', () => {
  it('switches the same page and reactive skill lists through a labelled native language control', async () => {
    const router = await mountSite('/what?lang=en&source=cv#intro')
    expect(document.querySelector('main')!.textContent).toContain('Core frontend ecosystem')
    expect(document.querySelector('main')!.textContent).not.toMatch(/[\u3400-\u9fff]/)
    const control = document.querySelector<HTMLSelectElement>('#nav-language-select')!
    expect(control.getAttribute('aria-label')).toBe('Website language')
    expect(control.value).toBe('en')
    const navigation = new Promise<void>(resolve => { const stop = router.afterEach(() => { stop(); resolve() }) })
    control.value = 'zh-TW'
    control.dispatchEvent(new Event('change', { bubbles: true }))
    await navigation
    await nextTick()
    expect(router.currentRoute.value.fullPath).toBe('/what?lang=zh-TW&source=cv#intro')
    expect(document.querySelector('main')!.textContent).toContain('前端核心生態')
    expect(document.querySelector('#nav-link-what')!.textContent).toBe('What')
  })

  it('captures the print language before switching and uses it in the failure fallback', async () => {
    const router = await mountSite('/who?lang=en')
    document.querySelector<HTMLButtonElement>('#nav-download-resume-btn')!.click()
    const frame = document.querySelector('iframe')!
    expect(frame.getAttribute('src')).toBe('/portfolio/resume?lang=en')
    expect(frame.title).toBe('Full resume print preview')
    expect(frame.getAttribute('src')).not.toMatch(/print|auto/)
    await router.push('/who?lang=zh-TW')
    const navigation = new Promise<void>(resolve => { const stop = router.afterEach(() => { stop(); resolve() }) })
    frame.dispatchEvent(new Event('error'))
    await navigation
    expect(router.currentRoute.value.fullPath).toBe('/resume?lang=en&print=true')
    expect(document.querySelector('iframe')).toBeNull()
  })

  it.each(['/', '/who', '/when', '/what', '/where', '/why', '/how', '/resume', '/missing'])('renders %s entirely in English and updates it back to Chinese', async path => {
    const router = await mountSite(`${path}?lang=en`)
    expect(document.querySelector('main')!.textContent).not.toMatch(/[\u3400-\u9fff]/)
    expect(document.querySelector('main')!.textContent).not.toMatch(/\b(?:common|home|who|when|what|where|why|how|resume|notFound)\.[a-z]/)
    expectFixedText(path)
    await router.push(`${path}?lang=zh-TW`)
    await nextTick()
    expect(document.querySelector('main')!.textContent).toMatch(/[\u3400-\u9fff]/)
    expectFixedText(path)
    expect(document.querySelector('#nav-link-who')!.textContent).toBe('Who')
    expect(document.querySelector('.brand-caption')!.textContent).toBe('Portfolio.')
  })

  it.each(['print', 'auto'])('prints the English resume once on direct %s entry after rendering', async flag => {
    const printed: string[] = []
    vi.stubGlobal('print', () => { printed.push(document.querySelector('main')!.textContent!) })
    const router = await mountSite(`/resume?lang=en&${flag}=true`)
    await nextTick()
    expect(printed).toHaveLength(1)
    expect(printed[0]).toContain('Senior Frontend Engineer')
    expect(printed[0]).toContain('Senior Frontend Developer')
    expect(printed[0]).not.toMatch(/[\u3400-\u9fff]/)
    await router.push(`/resume?lang=zh-TW&${flag}=true`)
    await nextTick()
    expect(printed).toHaveLength(1)
  })

  it('prints a ready iframe once and removes it after printing', async () => {
    await mountSite('/who?lang=en')
    document.querySelector<HTMLButtonElement>('#nav-download-resume-btn')!.click()
    const frame = document.querySelector('iframe')!
    const frameDocument = document.implementation.createHTMLDocument()
    frameDocument.body.innerHTML = '<header class="resume-profile-header">English resume</header>'
    Object.defineProperty(frameDocument, 'fonts', { value: { ready: Promise.resolve() } })
    Object.defineProperty(frame, 'contentDocument', { value: frameDocument })
    const print = vi.fn()
    frame.contentWindow!.print = print
    frame.contentWindow!.focus = vi.fn()
    frame.dispatchEvent(new Event('load'))
    await nextTick()
    await Promise.resolve()
    expect(print).toHaveBeenCalledOnce()
    frame.dispatchEvent(new Event('load'))
    expect(print).toHaveBeenCalledOnce()
    frame.contentWindow!.dispatchEvent(new Event('afterprint'))
    expect(document.querySelector('iframe')).toBeNull()
  })

  it('cancels pending print fallback when the site unmounts', async () => {
    const router = await mountSite('/who?lang=en')
    vi.useFakeTimers()
    document.querySelector<HTMLButtonElement>('#nav-download-resume-btn')!.click()
    app!.unmount()
    app = undefined
    const routeAfterUnmount = router.currentRoute.value.fullPath
    await vi.advanceTimersByTimeAsync(15000)
    expect(router.currentRoute.value.fullPath).toBe(routeAfterUnmount)
    expect(document.querySelector('iframe')).toBeNull()
  })

  it('restores rendered content and selected language with browser history while preserving query and hash', async () => {
    const router = await mountSite('/who?lang=en&source=cv#example')
    await router.push('/who?lang=zh-TW&source=cv#example')
    const back = new Promise<void>(resolve => { const stop = router.afterEach(() => { stop(); resolve() }) })
    router.back()
    await back
    await nextTick()
    expect(router.currentRoute.value.fullPath).toBe('/who?lang=en&source=cv#example')
    expect(document.querySelector<HTMLSelectElement>('#nav-language-select')!.value).toBe('en')
    expect(document.querySelector('h1')!.textContent).toBe('About me')
    expect(document.documentElement.lang).toBe('en')
  })

  it('uses the captured English language when the iframe never becomes ready', async () => {
    const router = await mountSite('/who?lang=en')
    vi.useFakeTimers()
    document.querySelector<HTMLButtonElement>('#nav-download-resume-btn')!.click()
    await router.push('/who?lang=zh-TW')
    await vi.advanceTimersByTimeAsync(15000)
    await nextTick()
    expect(router.currentRoute.value.fullPath).toBe('/resume?lang=en&print=true')
    expect(document.querySelector('iframe')).toBeNull()
    expect(window.print).toHaveBeenCalledOnce()
    expect(document.querySelector('h1')!.textContent).toBe('Fay Chung')
  })

  it('localizes copy feedback and mobile menu actions while retaining external URLs', async () => {
    const router = await mountSite('/where?lang=en')
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: vi.fn().mockResolvedValue(undefined) } })
    document.querySelector<HTMLButtonElement>('#quick-contact-btn')!.click()
    await Promise.resolve()
    await nextTick()
    expect(document.querySelector('[role="status"]')!.textContent).toBe('Email address copied')
    expect(document.querySelector('a[href="https://www.linkedin.com/in/fay-chung-682698224/"]')).not.toBeNull()
    expect(document.querySelector('main')!.textContent).toContain('JavaScript community')
    document.querySelector<HTMLButtonElement>('#mobile-menu-toggle')!.click()
    await nextTick()
    expect(document.querySelector('#mobile-download-resume-btn')!.textContent).toContain('Download resume (PDF)')
    await router.push('/where?lang=zh-TW')
    await nextTick()
    expect(document.querySelector('[role="status"]')!.textContent).toBe('已複製 Email 地址')
    expect(document.querySelector('#mobile-dropdown-menu')).toBeNull()
    expect(document.querySelector('main')!.textContent).toContain('台北，以及網路上。')
  })
})
