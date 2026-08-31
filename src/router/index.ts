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
    title: '首頁',
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
    meta: { title: '首頁 5W1H 總覽 | 資深前端履歷' }
  },
  {
    path: '/who',
    name: 'who',
    component: () => import('@/views/WhoView.vue'),
    meta: { title: 'Who - 個人定位與特質 | 5W1H Portfolio' }
  },
  {
    path: '/when',
    name: 'when',
    component: () => import('@/views/WhenView.vue'),
    meta: { title: 'When - 經歷時序與里程碑 | 5W1H Portfolio' }
  },
  {
    path: '/what',
    name: 'what',
    component: () => import('@/views/WhatView.vue'),
    meta: { title: 'What - 作品專案與技能棧 | 5W1H Portfolio' }
  },
  {
    path: '/where',
    name: 'where',
    component: () => import('@/views/WhereView.vue'),
    meta: { title: 'Where - 工作偏好與社群足跡 | 5W1H Portfolio' }
  },
  {
    path: '/why',
    name: 'why',
    component: () => import('@/views/WhyView.vue'),
    meta: { title: 'Why - 求職動機與工程哲學 | 5W1H Portfolio' }
  },
  {
    path: '/how',
    name: 'how',
    component: () => import('@/views/HowView.vue'),
    meta: { title: 'How - 方法論與協作實踐 | 5W1H Portfolio' }
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
