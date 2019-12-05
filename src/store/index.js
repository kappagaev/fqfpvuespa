import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/User'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  modules: {
    user: User
  },
  mutations: {

  },
  actions: {
  }
})
