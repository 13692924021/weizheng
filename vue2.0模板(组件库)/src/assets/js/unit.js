import Vue from "vue"
import store from "@/vuex/store.js"

// 返回數字的千分位格式
Vue.prototype.format = function (n,x=2) {
    n = Number(n)
    let pow = Math.pow(10,x)
    n = Math.ceil(n*pow) / pow
    var str = n.toString();
    str = str.replace(/[A-z]+/g, "")
    var reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g
    let num = str.replace(reg,"$1,");
    return num
}

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
