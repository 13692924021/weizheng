export default [
    {
        path: "/",
        redirect: "/login"
    },
    {
        path:"/index",
        name: "index",
        redirect: "/index/table",
        component: () => import("@/view/index/index.vue"),
        children: [
            {
                path:"/index/table",
                name: "table",
                meta: {
                    name:"Table表格"
                },
                component: () => import("@/view/table/table.vue")
            },
            {
                path:"/index/scrollNav",
                name: "scrollNav",
                meta: {
                    name: "滚动菜单"
                },
                component: () => import("@/view/scrollNav/scrollNav.vue")
            },
        ]
    },
    {
        path:"/login",
        name: "login",
        component: () => import("@/view/login/login.vue")
    },
    
]