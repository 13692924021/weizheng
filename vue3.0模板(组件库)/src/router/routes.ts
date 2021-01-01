export default [
    {
        path: "/",
        redirect: "/login"
    },
    {
        path:"/index",
        name: "index",
        retirect: "/index/table",
        component: () => import("@/view/index/index.vue"),
        children: [
            {
                path:"/index/table",
                name: "table",
                component: () => import("@/view/table/table.vue")
            },
            {
                path:"/index/scrollNav",
                name: "scrollNav",
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