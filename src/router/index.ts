import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

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
    path: '/about',
    redirect: '/who'
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { title: '404 找不到頁面 | Portfolio' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Update document title on navigation
router.afterEach((to) => {
  if (to.meta.title && typeof to.meta.title === 'string') {
    document.title = to.meta.title
  }
})

export default router
