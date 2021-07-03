import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import axios from "@/http/http.js"

Vue.prototype.$axios = axios

import router from "@/router/router.js"

import "@/assets/js/unit.js"


// 自定义组件
import myMenu from "@/components/menu/menu.vue"
import myTable from "@/components/Table/Table.vue"
import myNav from "@/components/myNav/myNav.vue" 

Vue.component("myNav", myNav)
Vue.component("myTable", myTable)
Vue.component("myMenu", myMenu)

// iView
import ViewUI from 'view-design';
import './main.less';



Vue.use(ViewUI);


//vuex
import store from "@/vuex/store.js"




import {conn, WebIM, call} from "@/assets/js/websdk.js"
Vue.prototype.$conn = conn
Vue.prototype.$WebIM = WebIM
Vue.prototype.$call = call

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
