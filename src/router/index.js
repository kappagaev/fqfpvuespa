import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../components/Profile.vue'
import Answer from '../components/Answer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/profile/:id',
    name: 'profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Profile,
    props: true 
  },
  {
    path: '/answer/:id',
    name: 'answer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Answer,
    props: true 
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
