import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h } from 'vue'
import { useI18n } from 'vue-i18n'
import { createMemoryHistory } from 'vue-router'
import { createPortfolioRouter } from '../src/router'
import i18n from '../src/i18n'
import { switchLocaleTarget } from '../src/i18n/locale'

beforeEach(() => {
  document.head.innerHTML = '<meta name="description" content="original">'
  vi.stubGlobal('scrollTo', vi.fn())
})

describe('language routing and metadata', () => {
  it('normalizes direct entry and redirects about while retaining language, query and hash', async () => {
    const router = createPortfolioRouter(createMemoryHistory('/portfolio/'))
    await router.push('/about/?lang=en&source=cv#intro')
    expect(router.currentRoute.value.fullPath).toBe('/who?lang=en&source=cv#intro')
    expect(i18n.global.locale.value).toBe('en')
    expect(document.documentElement.lang).toBe('en')
    expect(document.title).toBe('Who | Portfolio of Fay')
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toBe('Portfolio - Personal profile')
  })

  it('updates localized metadata on query switches and back/forward without dropping the literal title separator', async () => {
    const router = createPortfolioRouter(createMemoryHistory())
    await router.push('/resume?lang=en&print=true#section-who')
    expect(document.title).toBe('Full resume | Portfolio of Fay')
    await router.push(switchLocaleTarget(router.currentRoute.value, 'zh-TW'))
    expect(router.currentRoute.value.fullPath).toBe('/resume?lang=zh-TW&print=true#section-who')
    expect(document.title).toBe('完整履歷 | Portfolio of Fay')
    const back = new Promise<void>(resolve => { const stop = router.afterEach(() => { stop(); resolve() }) })
    router.back()
    await back
    expect(i18n.global.locale.value).toBe('en')
    expect(document.title).toBe('Full resume | Portfolio of Fay')
    const forward = new Promise<void>(resolve => { const stop = router.afterEach(() => { stop(); resolve() }) })
    router.forward()
    await forward
    expect(i18n.global.locale.value).toBe('zh-TW')
    expect(document.documentElement.lang).toBe('zh-TW')
  })

  it('renders unknown routes and invalid language as Chinese while preserving other parameters', async () => {
    const router = createPortfolioRouter(createMemoryHistory())
    await router.push('/unknown?lang=en')
    expect(document.title).toBe('404 Page not found | Portfolio')
    await router.push('/who/?lang=en&lang=zh-TW&source=cv#intro')
    expect(router.currentRoute.value.fullPath).toBe('/who?source=cv#intro')
    expect(document.documentElement.lang).toBe('zh-TW')
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toBe('Portfolio - 個人簡介')
  })

  it('keeps scroll on same-page query changes and still restores saved positions or scrolls new pages', async () => {
    const router = createPortfolioRouter(createMemoryHistory())
    await router.push('/who?lang=zh-TW#intro')
    const from = router.currentRoute.value
    await router.push('/who?lang=en#intro')
    const to = router.currentRoute.value
    const behavior = router.options.scrollBehavior!
    expect(behavior(to, from, null)).toBe(false)
    expect(behavior(to, from, { left: 0, top: 420 })).toEqual({ left: 0, top: 420 })
    await router.push('/when')
    expect(behavior(router.currentRoute.value, from, null)).toEqual({ top: 0, behavior: 'instant' })
  })

  it('leaves metadata untouched when navigation is cancelled', async () => {
    const router = createPortfolioRouter(createMemoryHistory())
    await router.push('/who?lang=en')
    router.beforeEach(() => false)
    await router.push('/resume?lang=zh-TW')
    expect(i18n.global.locale.value).toBe('en')
    expect(document.title).toBe('Who | Portfolio of Fay')
  })

  it('has the URL-selected language ready before the first application render', async () => {
    const router = createPortfolioRouter(createMemoryHistory())
    await router.push('/who?lang=en')
    const host = document.createElement('div')
    document.body.append(host)
    const app = createApp(defineComponent({
      setup() { const { t } = useI18n(); return () => h('p', t('who.title')) }
    }))
    app.use(i18n).use(router)
    await router.isReady()
    app.mount(host)
    expect(host.textContent).toBe('About me')
    app.unmount()
    host.remove()
  })
})
