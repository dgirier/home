import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import VueJS from '../views/VueJS.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuejs',
    name: 'Vue JS',
    component: VueJS
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
