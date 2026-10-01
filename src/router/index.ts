import { createRouter, createWebHistory, type RouterHistory, type RouteRecordRaw } from 'vue-router'
import i18n from '@/i18n'
import { normalizeLocaleRoute, resolveLocale } from '@/i18n/locale'

export interface NavRouteItem {
  path: string
  name: string
  title: string
  tag: string
  icon: string
  accentColor: string
}

export const navRoutes: NavRouteItem[] = [
  {
    path: '/',
    name: 'home',
    title: 'Home',
    tag: 'HOME',
    icon: '🏠',
    accentColor: 'var(--accent-primary)'
  },
  {
    path: '/who',
    name: 'who',
    title: 'Who',
    tag: 'WHO',
    icon: '👤',
    accentColor: 'var(--theme-who)'
  },
  {
    path: '/when',
    name: 'when',
    title: 'When',
    tag: 'WHEN',
    icon: '⏳',
    accentColor: 'var(--theme-when)'
  },
  {
    path: '/what',
    name: 'what',
    title: 'What',
    tag: 'WHAT',
    icon: '⚡',
    accentColor: 'var(--theme-what)'
  },
  {
    path: '/where',
    name: 'where',
    title: 'Where',
    tag: 'WHERE',
    icon: '📍',
    accentColor: 'var(--theme-where)'
  },
  {
    path: '/why',
    name: 'why',
    title: 'Why',
    tag: 'WHY',
    icon: '💡',
    accentColor: 'var(--theme-why)'
  },
  {
    path: '/how',
    name: 'how',
    title: 'How',
    tag: 'HOW',
    icon: '🛠️',
    accentColor: 'var(--theme-how)'
  }
]

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'Home | Portfolio of Fay' }
  },
  {
    path: '/who',
    name: 'who',
    component: () => import('@/views/WhoView.vue'),
    meta: { title: 'Who | Portfolio of Fay' }
  },
  {
    path: '/when',
    name: 'when',
    component: () => import('@/views/WhenView.vue'),
    meta: { title: 'When | Portfolio of Fay' }
  },
  {
    path: '/what',
    name: 'what',
    component: () => import('@/views/WhatView.vue'),
    meta: { title: 'What | Portfolio of Fay' }
  },
  {
    path: '/where',
    name: 'where',
    component: () => import('@/views/WhereView.vue'),
    meta: { title: 'Where | Portfolio of Fay' }
  },
  {
    path: '/why',
    name: 'why',
    component: () => import('@/views/WhyView.vue'),
    meta: { title: 'Why | Portfolio of Fay' }
  },
  {
    path: '/how',
    name: 'how',
    component: () => import('@/views/HowView.vue'),
    meta: { title: 'How | Portfolio of Fay' }
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
      : typeof to.meta.title === 'string' ? to.meta.title : 'Portfolio of Fay'
    document.querySelector('meta[name="description"]')?.setAttribute('content', i18n.global.t('common.metadata.description'))
  })

  return router
}

export default createPortfolioRouter()
