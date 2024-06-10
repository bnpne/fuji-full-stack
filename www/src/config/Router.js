import {createWebHistory, createRouter} from 'vue-router'

import Home from '@/core/views/Home.vue'
import About from '@/core/views/About.vue'

const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
