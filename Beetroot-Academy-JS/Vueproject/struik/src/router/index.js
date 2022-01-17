import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hoveniersbedrijf',
    name: 'Hoveniersbedrijf',
    component: () => import('../views/Hoveniersbedrijf.vue')
  },
  {
    path: '/bestratingen',
    name: 'Bestratingen',
    component: () => import('../views/Bestratingen.vue')
  },
  {
    path: '/groenvoorziening',
    name: 'Groenvoorziening',
    component: () => import('../views/Groenvoorziening.vue')
  },
  {
    path: '/zuigwerkzaamheden',
    name: 'Zuigwerkzaamheden',
    component: () => import('../views/Zuigwerkzaamheden.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
