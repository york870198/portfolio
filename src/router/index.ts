import { createRouter, createWebHistory, type RouterHistory, type RouteRecordRaw } from 'vue-router'
import i18n from '@/i18n'
import { normalizeLocaleRoute, resolveLocale } from '@/i18n/locale'

export interface NavRouteItem {
  path: string
  name: string
  titleKey: string
  tag: string
}

export const navRoutes: NavRouteItem[] = [
  { path: '/', name: 'home', titleKey: 'common.nav.home', tag: 'HOME' },
  { path: '/who', name: 'who', titleKey: 'common.nav.who', tag: 'WHO' },
  { path: '/when', name: 'when', titleKey: 'common.nav.when', tag: 'WHEN' },
  { path: '/what', name: 'what', titleKey: 'common.nav.what', tag: 'WHAT' },
  { path: '/where', name: 'where', titleKey: 'common.nav.where', tag: 'WHERE' },
  { path: '/why', name: 'why', titleKey: 'common.nav.why', tag: 'WHY' },
  { path: '/how', name: 'how', titleKey: 'common.nav.how', tag: 'HOW' }
]

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { pageKey: 'common.nav.home' }
  },
  {
    path: '/who',
    name: 'who',
    component: () => import('@/views/WhoView.vue'),
    meta: { pageKey: 'common.nav.who' }
  },
  {
    path: '/when',
    name: 'when',
    component: () => import('@/views/WhenView.vue'),
    meta: { pageKey: 'common.nav.when' }
  },
  {
    path: '/what',
    name: 'what',
    component: () => import('@/views/WhatView.vue'),
    meta: { pageKey: 'common.nav.what' }
  },
  {
    path: '/where',
    name: 'where',
    component: () => import('@/views/WhereView.vue'),
    meta: { pageKey: 'common.nav.where' }
  },
  {
    path: '/why',
    name: 'why',
    component: () => import('@/views/WhyView.vue'),
    meta: { pageKey: 'common.nav.why' }
  },
  {
    path: '/how',
    name: 'how',
    component: () => import('@/views/HowView.vue'),
    meta: { pageKey: 'common.nav.how' }
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('@/views/ResumeView.vue'),
    meta: { titleKey: 'common.metadata.resumeTitle' }
  },
  {
    path: '/about',
    redirect: to => ({ path: '/who', query: to.query, hash: to.hash })
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { titleKey: 'common.metadata.notFoundTitle' }
  }
]

export function createPortfolioRouter(history: RouterHistory = createWebHistory(import.meta.env.BASE_URL)) {
  const router = createRouter({
    history,
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) return savedPosition
      if (to.path === from.path && to.hash === from.hash) return false
      return { top: 0, behavior: 'instant' }
    }
  })

  // Normalize language and static directory URLs in a single redirect.
  router.beforeEach(to => normalizeLocaleRoute(to))

  // Only successful, confirmed URLs can change the site's language. This runs
  // on initial navigation before main.ts mounts, and on query/history changes.
  router.afterEach((to, _from, failure) => {
    if (failure) return
    const locale = resolveLocale(to.query.lang)
    i18n.global.locale.value = locale
    document.documentElement.lang = locale
    document.title = typeof to.meta.titleKey === 'string'
      ? i18n.global.t(to.meta.titleKey)
      : typeof to.meta.pageKey === 'string'
        ? i18n.global.t('common.metadata.pageTitle', { page: i18n.global.t(to.meta.pageKey) })
        : 'Portfolio of Fay'
    document.querySelector('meta[name="description"]')?.setAttribute('content', i18n.global.t('common.metadata.description'))
  })

  return router
}

export default createPortfolioRouter()
