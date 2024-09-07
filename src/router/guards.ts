import type { Router } from 'vue-router'

export const setupRouterGuards = (router: Router) => {
  // router.beforeEach((to, from, next) => {
  //   if (to.meta.requiresAuth) {
  //     const isAuthenticated = true
  //     if (isAuthenticated) {
  //       next()
  //     } else {
  //       next({ name: 'Login' })
  //     }
  //   } else {
  //     next()
  //   }
  // })

  router.afterEach((to, from) => {
    console.log('afterEach', to, from)
  })
}

