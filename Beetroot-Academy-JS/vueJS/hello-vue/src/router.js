import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',  //'/base'
    name: 'About',   //Base
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('./views/About.vue')   //'./views/base/base.vue'
  },
  {
    path: '/base',  
    name: 'Base',   
    component: () => import('./views/base/base.vue')   
  },
  {
    path: '/newpage',  
    name: 'newpage',   
    component: () => import('./views/newpage/newpage.vue')   
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
