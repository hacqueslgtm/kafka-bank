import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { useAppStore } from '@/stores/appStore'

interface RouteMeta {
  title?: string
  requiresAuth: boolean
  highlight?: 'Home' | 'Account' | 'Card' | 'Invest' | 'User'
}

interface RouteRecord {
  meta?: RouteMeta
  [key: string]: any
}

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
      header: () => import('@/views/NotFound/components/NotFoundHeader.vue'),
      default: () => import('@/views/NotFound/NotFound.vue')
    },
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/onboarding',
    name: 'Onboarding',
    components: {
      header: () => import('@/views/Onboarding/components/OnboardingHeader.vue'),
      default: () => import('@/views/Onboarding/Onboarding.vue')
    },
    meta: {
      requiresAuth: false
    }
  },
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
  },
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
  },
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

export default router