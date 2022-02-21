import { createRouter, createWebHashHistory } from 'vue-router'
import Menu from '../components/Menu.vue'
import Play from '../components/Play.vue'

const routes = [
  { path: '/play', component: Play },
  { path: '/', component: Menu },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
