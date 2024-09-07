import type { RouteRecord } from '@/types/router.types'

export const userRoutes: RouteRecord[] = [
  {
    path: '/login',
    name: 'Login',
    components: {
      header: () => import('@/views/Login/components/LoginHeader.vue'),
      default: () => import('@/views/Login/Login.vue')
    },
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/user',
    name: 'User',
    components: {
      default: () => import('@/views/User/User.vue'),
      footer: () => import('@/components/layout/Navigator.vue')
    },
    meta: {
      requiresAuth: true,
      highlight: 'User'
    }
  }
]

