import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import ThankYou from '../ThankYou.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App
  },
  {
    path: '/thank-you',
    name: 'ThankYou',
    component: ThankYou
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
