import { createRouter, createWebHistory } from 'vue-router'
import { useAppStore } from '@/stores/appStore'

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
  routes: [
    {
      path: '/',
      redirect: () => {
        if (useAppStore().isFirstUsed) return { name: 'Onboarding' }
        return { name: 'Home' }
      }
    },
    {
      path: '/onboarding',
      name: 'Onboarding',
      components: {
        header: () => import('@/views/OnBoarding/components/OnboardingViewHeader.vue'),
        default: () => import('@/views/OnBoarding/OnboardingView.vue')
      }
    },
    {
      path: '/login',
      name: 'UserLogin',
      components: {
        header: () => import('@/views/UserLogin/components/UserLoginHeader.vue'),
        default: () => import('@/views/UserLogin/UserLogin.vue')
      }
    }
  ]
})

export default router

