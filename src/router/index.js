import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import ThankYou from '../ThankYou.vue'
import Disclaimer from '../Disclaimer.vue'

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
  },
  {
    path: '/disclaimer',
    name: 'Disclaimer',
    component: Disclaimer
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
