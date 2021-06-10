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

// iView
import ViewUI from 'view-design';
import './main.less';

// 返回數字的千分位格式
Vue.prototype.format = function (n,x) {
    n = Number(n)
    if (x) {
        let pow = Math.pow(10,x)
        n = Math.ceil(n*pow) / pow
    }
    var str = n.toString();
    str = str.replace(/[A-z]+/g, "")
    var reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g
    let num = str.replace(reg,"$1,");
    return num
},

Vue.use(ViewUI);


//vuex
import store from "@/vuex/store.js"

// 多语言
import customZhCn from '@/locale/lang/zh-CN'
import customZhTw from '@/locale/lang/zh-TW'
import customEnUs from '@/locale/lang/en-US'
const messages = {
//   'zh-CN': Object.assign(zhCnLocale, customZhCn),
//   'zh-TW': Object.assign(zhTwLocale, customZhTw),
//   'en-US': Object.assign(enUsLocale, customEnUs)
    'zh-CN':  customZhCn,
    'zh-TW':  customZhTw,
    'en-US':  customEnUs
}
let lang = localStorage.getItem("lang") || 'zh-TW'
store.commit("setAppData", { key: "lang", value: lang })

Vue.prototype.l = function (data) {
    // console.log(123)
    if (messages[store.state.app.lang][data]) {
        return messages[store.state.app.lang][data]
    } else {
        return data
    } 
}

import {conn, WebIM, call} from "@/assets/js/websdk.js"
Vue.prototype.$conn = conn
Vue.prototype.$WebIM = WebIM
Vue.prototype.$call = call

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
