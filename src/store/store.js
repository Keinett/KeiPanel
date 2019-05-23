import Vue from 'vue'
import Vuex from 'vuex'

import api from './modules/api'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    api: api
  },
  state: {
    logged: false,
    token: '',
  },
  mutations: {
    loggedIn(state, val) {
      state.logged = val
    },
    initializeStore (state) {
      if (localStorage.getItem('store')) {
        this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem('store'))))
      }
    },
  },
  actions: {
    login: ({commit}) => {
      commit('loggedIn', true)
    },
    logout: ({commit}) => {
      commit('loggedIn', false)
    },
  }
})
