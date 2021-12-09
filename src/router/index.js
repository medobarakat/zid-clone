import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Services from "../views/Services.vue";
import Pricing from "../views/Pricing.vue";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: () => import('../views/Pricing.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
