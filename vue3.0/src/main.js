import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import { createRouter,createWebHistory } from "vue-router"

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/components/test.vue")
    },
    {
        path: "/test2",
        name: "test2",
        component: () => import("@/components/test2.vue")
    },
    {
        path: "/test3",
        name: "test3",
        component: () => import("@/components/test3.vue")
    },
]

// console.log(createRouter)
const router = createRouter({
    history:createWebHistory(),
    routes
})

app.use(router)

app.mount('#app') 


