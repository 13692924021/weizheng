<style lang="scss" scoped>
.Wrap {
    display:grid;
    grid-template-columns: 300px 1fr;
    height: 100%;
    height: calc(100vh - 1px);
    background: #FCFCFC;
}
.menuWrap {
    height: 100%;
    box-shadow: 0 5px 5px #333;
}
</style>

<template>
    <div class="Wrap">
        <div class="menuWrap">
            <myMenu :list="list" @active="active"></myMenu>
        </div>

        <div></div>
    </div>
</template>

<script>
// import menuList from "@/router/routes.ts"
export default {
    inject: ["store","lang"],
    data () {
        return {
            list: [
                {
                    path:"/index/table",
                    name: "Table表格",
                    children: []
                },
                {
                    path:"/index/scrollNav",
                    name: "滚动菜单",
                    children: []
                },
                {
                    path:"/index/table",
                    name: "折叠",
                    children: [
                        {
                            path:"/index/table",
                            name: "子菜单1",
                            children: []
                        },
                        {
                            path:"/index/table",
                            name: "子菜单2",
                            children: []
                        },
                        
                    ]
                },
            ]
        }
    },
    created () {
        // this.list= []
        // menuList.find(item => item.name=='index').children.forEach(item => {
        //     this.list.push({
        //         path: item.path,
        //         name: item.meta.title,
        //         children:item.children ? item.children : []
        //     })
        // })
    },
    methods:{
        active (menu) {
            // this.$router.push(menu.path)
            console.log(menu)
        }
    }
    
}
</script>

