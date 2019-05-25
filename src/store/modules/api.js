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
    getServers: ({commit}) => {
      return new Promise((resolve, reject) => {
        Vue.axios.get(`/panel/list`).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    restartServer: ({commit}, data) => {
      return new Promise((resolve, reject) => {
        Vue.axios.post(`/panel/restart`, data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    fixPerms: ({commit}, data) => {
      return new Promise((resolve, reject) => {
        Vue.axios.post(`/panel/fixpermissions`, data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
})
