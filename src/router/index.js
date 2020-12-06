import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout'),
    children: [
      {
        path: 'lighthouse',
        name: 'lighthouse',
        component: () => import('@/views/ListPage.vue'),
      },
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/ListPage.vue'),
      },
      {
        path: 'map',
        name: 'map',
        component: () => import('@/views/MapPage.vue'),
      }
    ]
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
