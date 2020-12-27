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
            <myMenu :list="list"></myMenu>
        </div>

        <div></div>
    </div>
</template>

<script>

export default {
    inject: ["store","lang"],
    data () {
        return {
            list: [
                {
                    path:"/index/table",
                    title: "Table表格",
                    children: []
                },
                {
                    path:"/index/table",
                    title: "Table表格",
                    children: []
                },
                {
                    path:"/index/table",
                    title: "Table表格",
                    children: []
                },
            ]
        }
    },
    created () {

    },
    methods:{

    }
    
}
</script>

