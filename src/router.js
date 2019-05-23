import Vue from 'vue'
import Router from 'vue-router'

import Login from './views/Login'

import Header from './components/Header'
import Footer from './components/Footer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'default',
      components: {
        header: Header,
        default: Login,
        footer: Footer
      }
    },
  ]
})
