export default [
    {
        path: "/",
        redirect: "/login"
    },
    {
        path:"/index",
        name: "index",
        meta: {
            hideInMenu: false,
            title: "首页"
        },
        component: () => import("@/view/index/index.vue"),
        children: [
            {
                path:"/table",
                name: "table",
                meta: {
                    hideInMenu: false,
                    title: "Table表格"
                },
                component: () => import("@/view/table/table.vue")
            },
        ]
    },
    {
        path:"/login",
        name: "login",
        meta: {
            hideInMenu: true,
            title: "登录"
        },
        component: () => import("@/view/login/login.vue")
    },
    
]