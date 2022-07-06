import { createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/Home.vue')
  }
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}
