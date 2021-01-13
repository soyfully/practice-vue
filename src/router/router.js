import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home/home.vue'
import profile from '../views/profile/profile.vue'
import work from '../views/work/work.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
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
