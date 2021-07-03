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
import Edit from "@/components/editor/editor.vue"

Vue.component("Edit", Edit)
Vue.component("Top", Top)
Vue.component("Pop", Pop)

Vue.prototype.warning = function (text) {
	uni.showToast({
		title: text,
		icon: "none",
		duration: 3000
	})
}
Vue.prototype.success = function (text) {
	uni.showToast({
		title: text,
		duration: 3000
	})
}

const app = new Vue({
	store,
    ...App
})
app.$mount()
