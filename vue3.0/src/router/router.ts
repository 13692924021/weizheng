import { createRouter, createWebHashHistory } from "vue-router"
import routes from "./routes"


const router:Object = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router