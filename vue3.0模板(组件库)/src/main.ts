import { createApp } from 'vue'

//shallowRef , shallowReactive  只监听第一层数据，不递归监听
//toRaw  获取reactive数据的原始数据， 修改不更新视图
//markRaw 用markRaw返回的对象传给reactive不会触发视图更新
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

// 自定义组件
import myMenu from "@/components/menu/menu.vue"
app.component("myMenu", myMenu)


app.mount('#app')



declare global {
    interface Window {
        __VUE_DEVTOOLS_GLOBAL_HOOK__: any
    }
}

// window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor
// app.config.devtools = true
// 分环境处理
if (process.env.NODE_ENV === 'development') {
if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in window) {
// 这里__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue赋值一个createApp实例
    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor
    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue.mixin = ()=>{}
}
app.config.devtools = true
}


