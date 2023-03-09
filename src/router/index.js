import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Test1View.vue')
    },
    {
      path: '/test1',
      name: 'test1',
      component: () => import('../views/Test1View.vue')
    },
    {
      path: '/test2',
      name: 'test2',
      component: () => import('../views/Test2View.vue')
    }
  ]
})

export default router
