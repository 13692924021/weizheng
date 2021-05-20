import Vue from 'vue'
import App from './App.vue'

import router from '../src/router/router.js'
Vue.use(router)

Vue.config.productionTip = false


import axios from 'axios'

// axios.defaults.baseURL = 'http://mostex.nextsls.com/'
axios.defaults.baseURL = '/api/'

window.token = "5f9cbbee3aff973f275a2ff15f9cbbeead8319007"

Vue.prototype.$axios = axios

import ElementUI from 'element-ui';

Vue.use(ElementUI)
// import "./element-variables .scss"
import "@/assets/theme/index.css"

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
