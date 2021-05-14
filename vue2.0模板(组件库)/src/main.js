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
Vue.prototype.format = function (n) {
    n = Number(n)
    var str = n.toString();
    str = str.replace(/[A-z]+/g, "")
    var reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g
    let num = str.replace(reg,"$1,");
    return num
},

Vue.use(ViewUI);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
