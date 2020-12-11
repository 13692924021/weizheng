import { createApp } from 'vue'
import App from './App.vue'
const app:any = createApp(App)

//路由
import router from "@/router/router.ts"
app.use(router)

//store
import store from "@/store/store.ts"
app.provide("store",store)

//Element UI        https://element-plus.gitee.io/#/zh-CN/component/custom-theme
import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'
app.use(ElementPlus, { size:"small" })
import "./main.scss"

app.mount('#app') 


