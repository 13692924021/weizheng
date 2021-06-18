import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

import "@/static/css/public.css"

import store from "@/vuex/store.js"

import http from "@/static/js/http.js"
Vue.prototype.$http = http



import Pop from "@/components/uni-popup/uni-popup.vue"
import Top from "@/components/Top.vue"

Vue.component("Top", Top)
Vue.component("Pop", Pop)

const app = new Vue({
	store,
    ...App
})
app.$mount()
