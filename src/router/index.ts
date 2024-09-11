import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { useAppStore } from '@/stores/appStore'
import type { RouteRecord } from '@/types/router.types'
import { homeRoutes } from './routes/home'
import { loginRoutes } from './routes/login'
import { errorRoutes } from './routes/error'
import { userRoutes } from './routes/user'
import { cardRoutes } from './routes/card'
import { accountRoutes } from './routes/account'

const routes: RouteRecord[] = [
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'NotFound' }
  },
  {
    path: '/',
    redirect: () => {
      if (useAppStore().isFirstUsed) return { name: 'Onboarding' }
      return { name: 'Home' }
    }
  },
  {
    path: '/404',
    name: 'NotFound',
    components: {
      header: () => import('@/views/error/components/NotFoundHeader.vue'),
      default: () => import('@/views/error/NotFound.vue')
    },
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/onboarding',
    name: 'Onboarding',
    components: {
      header: () => import('@/views/welcome/components/WelcomeHeader.vue'),
      default: () => import('@/views/welcome/Welcome.vue')
    },
    meta: {
      requiresAuth: false
    }
  },
  ...homeRoutes,
  ...loginRoutes,
  ...errorRoutes,
  ...userRoutes,
  ...cardRoutes,
  ...accountRoutes
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return {
      top: 0,
      behavior: 'smooth'
    }
  },
  routes: routes as RouteRecordRaw[]
})

import { setupRouterGuards } from './guards'
setupRouterGuards(router)

export default router

