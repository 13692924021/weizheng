<style lang="less" scoped>
.Index {
    height: 100vh;
}
.Wrap {
    display:flex;
    // height: 100%;
    // height: calc(100vh - 1px);
    background: #FCFCFC;
    flex: 10;
    >div {
        height: 100%;
        overflow-y: auto;
        box-sizing: border-box;
    }
    >div:first-child {
        width: 250px;
    }
    >div:last-child {
        flex: 10;
    }
}
.menuWrap {
    height: 100%;
    box-shadow: 0 5px 5px #333;
}
.Main {
    padding: 20px;
}
</style>

<template>
<div class="Index columns">
    <div >
        <header class="ju">header</header>
    </div>
    <div class="Wrap">
        <div class="menuWrap noBar">
            <myMenu :list="list" @active="active" :activeName="activeName"></myMenu>
        </div>

        <div class="Main">
            <router-view></router-view>
        </div>
    </div>
</div>
   
</template>

<script>
// import menuList from "@/router/routes.ts"
export default {
    data () {
        return {
            activeName: "Table表格",
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
                    path:"/index/css",
                    name: "CSS",
                    children: []
                },
                // {
                //     path:"/",
                //     name: "折叠2",
                //     children: [
                //         {
                //             path:"/index/child1",
                //             name: "子菜单3",
                //             children: []
                //         },
                //         {
                //             path:"/index/child2",
                //             name: "子菜单4",
                //             children: []
                //         },
                        
                //     ]
                // },
            ]
        }
    },
    watch: {
        "$route": {
            handler () {
                this.activeName = this.$route.meta.name
            },
            immediate: true
        },
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
            this.$router.push(menu.path)
            // console.log(menu)
        }
    }
    
}
</script>

