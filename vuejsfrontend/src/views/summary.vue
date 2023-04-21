import Summary from './components/Summary.vue'

const routes = [
  // other routes
  {
    path: '/summary',
    name: 'summary',
    component: Summary,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})