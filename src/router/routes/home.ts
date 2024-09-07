import type { RouteRecord } from '@/types/router.types'

export const homeRoutes: RouteRecord[] = [
  {
    path: '/home',
    name: 'Home',
    components: {
      header: () => import('@/components/layout/Header.vue'),
      default: () => import('@/views/Home/HomeView.vue'),
      footer: () => import('@/components/layout/Navigator.vue')
    },
    meta: {
      requiresAuth: true,
      highlight: 'Home'
    }
  }
]

