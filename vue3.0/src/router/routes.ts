export default [
    {
        path:"/",
        name: "/index",
        component: () => import("@/view/index/index.vue")
    },
    {
        path:"/about",
        name: "/about",
        component: () => import("@/view/about/about.vue")
    },
    {
        path:"/contact",
        name: "/contact",
        component: () => import("@/view/contact/contact.vue")
    },
]