import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import profile from '../views/profile.vue'
import work from '../views/work.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile,
  },
  {
    path: '/work',
    name: 'work',
    component: work,
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
