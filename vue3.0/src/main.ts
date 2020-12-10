import { createApp } from 'vue'
import App from './App.vue'
const app:any = createApp(App)

//路由
import router from "@/router/router.ts"
app.use(router)

//store
import store from "@/store/store.ts"
app.provide("store",store)


app.mount('#app') 


