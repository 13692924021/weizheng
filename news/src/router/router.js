import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
    mode:'history',
    routes: [
        {
            path:'/',
            component:() => import('../view/login/login')
        },
        {
            path:'/index',
            name:'index',
            redirect:'/index/table',
            component:() => import('../view/index/index.vue'),
            children: [
                {
                    path:'/index/table',
                    component:() => import('../components/Table/Table.vue')
                }
            ]
        }
    ]
})

export default router