import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createApp, h, nextTick, type App } from 'vue'
import { createMemoryHistory } from 'vue-router'
import { createPortfolioRouter } from '../src/router'
import NavigationLink from '../src/components/NavigationLink.vue'
import ResumeView from '../src/views/ResumeView.vue'
import NotFoundView from '../src/views/NotFoundView.vue'
import i18n from '../src/i18n'

let app: App | undefined
beforeEach(() => {
  document.body.innerHTML = '<div id="test-app"></div>'
  vi.stubGlobal('matchMedia', () => ({ matches: true }))
  vi.stubGlobal('scrollTo', vi.fn())
})
afterEach(() => { app?.unmount(); app = undefined; Reflect.deleteProperty(document, 'startViewTransition'); vi.unstubAllGlobals() })

async function mountLink(from: string, to: string, target?: string) {
  const router = createPortfolioRouter(createMemoryHistory('/portfolio/'))
  await router.push(from)
  app = createApp({ render: () => h(NavigationLink, { to, target }, () => 'Read more') })
  app.use(router)
  app.mount('#test-app')
  await nextTick()
  return { router, anchor: document.querySelector('a')! }
}

describe('language-aware internal links', () => {
  it('uses the same language-aware target for href, normal clicks and subsequent query changes', async () => {
    const { router, anchor } = await mountLink('/resume?lang=en&print=true', '/who#intro')
    expect(anchor.getAttribute('href')).toBe('/portfolio/who?lang=en#intro')
    const navigation = new Promise<void>(resolve => { const stop = router.afterEach(() => { stop(); resolve() }) })
    anchor.click()
    await navigation
    expect(router.currentRoute.value.fullPath).toBe('/who?lang=en#intro')
    expect(anchor.getAttribute('aria-current')).toBe('page')
    await router.push('/who?lang=zh-TW#intro')
    await nextTick()
    expect(anchor.getAttribute('href')).toBe('/portfolio/who?lang=zh-TW#intro')
  })

  it('keeps new-tab/modified clicks native with a language-bearing href', async () => {
    const { router, anchor } = await mountLink('/who?lang=en', '/when', '_blank')
    const event = new MouseEvent('click', { ctrlKey: true, cancelable: true, bubbles: true })
    anchor.dispatchEvent(event)
    expect(event.defaultPrevented).toBe(false)
    expect(anchor.getAttribute('href')).toBe('/portfolio/when?lang=en')
    expect(router.currentRoute.value.fullPath).toBe('/who?lang=en')
  })

  it('changes same-page language without a View Transition', async () => {
    const transition = vi.fn()
    Object.defineProperty(document, 'startViewTransition', { configurable: true, value: transition })
    vi.stubGlobal('matchMedia', () => ({ matches: false }))
    const { router, anchor } = await mountLink('/who?lang=en', '/who?lang=zh-TW')
    const navigation = new Promise<void>(resolve => { const stop = router.afterEach(() => { stop(); resolve() }) })
    anchor.click()
    await navigation
    expect(router.currentRoute.value.fullPath).toBe('/who?lang=zh-TW')
    expect(transition).not.toHaveBeenCalled()
  })

  it('continues cross-page navigation even if the animation snapshot is skipped', async () => {
    Object.defineProperty(document, 'startViewTransition', {
      configurable: true,
      value: (update: () => Promise<void>) => ({ ready: Promise.reject(new Error('Snapshot skipped')), updateCallbackDone: update() })
    })
    vi.stubGlobal('matchMedia', () => ({ matches: false }))
    const { router, anchor } = await mountLink('/who?lang=en', '/when')
    const navigation = new Promise<void>(resolve => { const stop = router.afterEach(() => { stop(); resolve() }) })
    anchor.click()
    await navigation
    expect(router.currentRoute.value.fullPath).toBe('/when?lang=en')
  })

  it.each([
    [ResumeView, '/resume?lang=en&print=false&auto=false', '#resume-back-btn'],
    [NotFoundView, '/missing?lang=en', '#notfound-btn-home']
  ] as const)('returns home from %s without losing language or forwarding print parameters', async (view, from, selector) => {
    const router = createPortfolioRouter(createMemoryHistory())
    await router.push(from)
    app = createApp(view)
    app.use(i18n).use(router)
    app.mount('#test-app')
    const navigation = new Promise<void>(resolve => { const stop = router.afterEach(() => { stop(); resolve() }) })
    document.querySelector<HTMLButtonElement>(selector)!.click()
    await navigation
    expect(router.currentRoute.value.fullPath).toBe('/?lang=en')
  })
})
