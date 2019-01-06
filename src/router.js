import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Works from './views/Works.vue'
import System from './views/System.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/system',
      name: 'system',
      component: System
    },
  ]
})
