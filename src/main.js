import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from './plugins/axios'
import './registerServiceWorker'

import jwt from 'jsonwebtoken'
import io from 'socket.io-client';

Vue.config.productionTip = false


Vue.mixin({
  data: () => ({
    socket: io('panel.potatosalad.keinett.us'),
  }),
  computed: {
    // decoded jwt
    decodedToken() {
      if (!this.$store.state.token) return null
      return jwt.decode(String(this.$store.state.token))
    }
  }
})

new Vue({
  router,
  store,
  axios,
  beforeCreate () {
    this.$store.commit('initializeStore')
  },
  render: h => h(App)
}).$mount('#app')
