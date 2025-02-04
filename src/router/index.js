import { createRouter, createWebHistory } from 'vue-router'
import MonCompte from '../views/MonCompte.vue'
import Security from '../views/Security.vue'

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
    },
    {
      path: '/security',
      name: 'security',
      component: Security
    }
  ]
})

export default router