import type { RouteRecord } from '@/types/router.types'

export const loginRoutes: RouteRecord[] = [
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
  }
]

