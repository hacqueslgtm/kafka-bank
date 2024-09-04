import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '*',
    //   name: 'NotFound',
    //   component: import('@/views/NotFound/NotFound.vue')
    // },
    {
      path: '/',
      name: 'UserLogin',
      component: import('@/views/UserLogin/UserLogin.vue')
    }
  ]
});

export default router;

