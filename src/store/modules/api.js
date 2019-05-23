import Vue from 'vue'

export default ({
  namespaced: true,
  actions: {
    login: ({commit}, data) => {
      return new Promise((resolve, reject) => {
        Vue.axios.post(`/auth/login`, data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
})