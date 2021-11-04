import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SearchForm from '../views/SearchForm.vue'
import SearchResults from '../views/SearchResults.vue'
import IndividualEstate from '../views/IndividualEstate.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search/form',
    name: 'SearchForm',
    component: SearchForm
  },
  {
    path: '/search/results',
    name: 'SearchResults',
    component: SearchResults
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
