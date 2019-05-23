import axios from 'axios'
import store from '../../store/store'

export default axios.create({
  baseURL: 'https://panel.potatosalad.keinett.us/v1/',
  headers: {
    'Authorization': {
      toString () {
        return `${store.state.token}`
      }
    },
    'Content-Type': 'application/json',
  }
})
