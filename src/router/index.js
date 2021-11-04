import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import IndividualEstate from '../views/IndividualEstate'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/estates/{estateId}',
    name: 'IndividualEstate',
    component: IndividualEstate
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
