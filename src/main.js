import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'
import './styles/reset.css'
import { getTestData } from './api/test'

Vue.config.productionTip = false

getTestData()
  .then((res) => {
    console.log('res', res)
  })
  .catch((err) => {
    console.error('err', err)
  })

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
