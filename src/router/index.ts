import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quotes',
    name: 'QuoteSection',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/QuoteSection.vue')
  },
  {
    path: '/cheese',
    name: 'CheeseSection',
    component: () => import('../components/CheeseSection.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
