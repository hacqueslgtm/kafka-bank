import type { RouteRecord } from '@/types/router.types'

export const accountRoutes: RouteRecord[] = [
  {
    path: '/Account',
    name: 'Account',
    components: {
      header: () => import('@/components/layout/Header.vue'),
      default: () => import('@/views/Account/Account.vue'),
      footer: () => import('@/components/layout/Navigator.vue')
    },
    props: {
      header: { title: 'Accounts' }
    },
    meta: {
      requiresAuth: true,
      highlight: 'Account'
    }
  }
]

