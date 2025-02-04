import { createRouter, createWebHistory } from 'vue-router'
import MonCompte from '../views/MonCompte.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/mon-compte'
    },
    {
      path: '/mon-compte',
      name: 'mon-compte',
      component: MonCompte
    }
  ]
})

export default router