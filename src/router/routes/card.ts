import type { RouteRecord } from '@/types/router.types'

export const cardRoutes: RouteRecord[] = [
  {
    path: '/cards',
    name: 'Card',
    components: {
      // header: () => import('@/views/Card/components/CardViewHeader.vue'),
      default: () => import('@/views/Card/Card.vue'),
      footer: () => import('@/components/layout/Navigator.vue')
    },
    meta: {
      requiresAuth: true,
      highlight: 'Card'
    }
  }
]

