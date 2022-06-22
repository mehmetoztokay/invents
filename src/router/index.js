import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    name: 'HomePage',
    path: '/',
    component: () => import('../views/Home.vue')
  },
  {
    name: 'IventsPage',
    path: '/ivents',
    component: () => import('../views/Ivents.vue')
  },
  {
    name: 'IventDetailsPage',
    path: '/ivent-details',
    component: () => import('../views/IventDetails.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
