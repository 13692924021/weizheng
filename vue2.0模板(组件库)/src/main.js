import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import axios from "@/http/http.js"

Vue.prototype.$axios = axios

import router from "@/router/router.js"


// 自定义组件
import myMenu from "@/components/menu/menu.vue"
import myTable from "@/components/Table/Table.vue"
import myNav from "@/components/myNav/myNav.vue" 

Vue.component("myNav", myNav)
Vue.component("myTable", myTable)
Vue.component("myMenu", myMenu)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
