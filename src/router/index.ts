import { createRouter, createWebHistory } from 'vue-router'

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
      name: 'UserLogin',
      components: {
        header: () => import('@/views/UserLogin/components/UserLoginHeader.vue'),
        default: () => import('@/views/UserLogin/UserLogin.vue')
      }
    }
  ]
})

export default router

