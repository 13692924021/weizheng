import { createApp, markRaw } from 'vue'

//shallowRef , shallowReactive  只监听第一层数据，不递归监听
//toRaw  获取reactive数据的原始数据， 修改不更新视图
//markRaw 用markRaw返回的对象传给reactive不贵触发视图更新
//toRef(obj,'key')  关原始数据，修改的同时会修改原始数据， 但不触发视图更新
//toRefs(obj) 
// customRef((track,trigger) => {     //有点类似computed
//     return {
//         get () {
//             track()      //告诉Vue这个数据需要追踪
//             return 123
//         },
//         set () {
//             trigger()  //书法视图更新
//         }
//     }
// })

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


