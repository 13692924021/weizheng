import { createApp } from 'vue'
import App from './App.vue'
const app:any = createApp(App)

//路由
import router from "@/router/router.ts"
app.use(router)

//store
import store from "@/store/store.ts"
app.provide("store",store)


import "./main.scss"

// http
declare global {
    interface Window { http: any }
}
import http from "@/http/http.ts"
window.http = http


//多语言
import lang from "@/locale/locale.ts"
app.provide("lang",lang)


//Element UI        https://element-plus.gitee.io/#/zh-CN/component/custom-theme
import ElementPlus from 'element-plus'
import tw from 'element-plus/lib/locale/lang/zh-tw'
app.use(ElementPlus, { size:"small",locale: tw})      //默认繁体


app.mount('#app') 


