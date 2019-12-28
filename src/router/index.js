import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../components/Profile.vue'
import Answer from '../components/Answer.vue'
import Tape from '../components/Tape.vue'
import i18n from '../i18n.js'

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
    path: '/answer/:answerId',
    name: 'answer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Answer,
    props: true 
  },
  {
    path: '/tape',
    name: 'tape',
    component: Tape
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const lang = to.query.hl

  if (!['en', 'ru'].includes(lang)) return next(to.path+'?hl=en')

  if (i18n.locale !== lang) {
    i18n.locale = lang
  }
  return next()
})

export default router
