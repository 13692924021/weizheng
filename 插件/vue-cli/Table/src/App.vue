<style lang="less" scoped>

</style>

<template>
    <div id="app">
        <Table :columns="columns" :list="list" @on-check="onCheck">
            <template slot="btn" >
                <button>按钮</button>
            </template>
        </Table>
    </div>
</template>

<script>
import Table from './components/Table/Table.vue'

export default {
    name: 'App',
    data () {
        return {
            columns: [
                {
                    selection: true,
                },
                { 
                    title: "id",
                    key: "id",
                    // searchType: "select"
                    // width: "20%",
                },
                {
                    title: "姓名",
                    key: "name",
                    searchType: "select"
                    // width: "8%",
                },
                {
                    title: "所属分类",
                    key: "categoryName",
                    searchType: "select"
                    // width: "20%",
                },
                {
                    title: "品牌",
                    key: "brand",
                    // width: "20%",
                    noSearch: true
                },
                {
                    title: "产地",
                    key: "country",
                    searchType: "select"
                    // width: "20%",
                },
                {
                    title: "创建时间",
                    key: "createdAt",
                    searchType: "select"
                    // width: "20%",
                },
                {
                    title: "操作",
                    noSearch: true,
                    slot:"btn"
                }
            ],
            list: [
                {
                    id: 1,
                    age: "18",
                    name: "刘德华",
                    place: "香港",
                    dob: "1980-1"
                },
                {
                    id: 2,
                    age: "28",
                    name: "刘青云",
                    place: "香港",
                    dob: "1979-9"
                },
                {
                    id: 3,
                    age: "40",
                    name: "成龙",
                    place: "香港",
                    dob: "1977-9"
                },
                {
                    id: 4,
                    age: "25",
                    name: "刘诗诗",
                    place: "大陆",
                    dob: "1929-9"
                },
                {
                    id: 5,
                    age: "18",
                    name: "杨超越",
                    place: "大陆",
                    dob: "1999-9"
                },
            ]
        }
    },
    created () {
        this.getData()
        this.list = []
    },
    methods:{
        getData () {
            this.$axios({
                url: "http://167.179.100.249:9091/v1/product"
            }).then(res => {
                console.log(res)
                if (res.data.products) {
                    this.list = res.data.products
                }
            })
        },
        onCheck (e) {
            console.log(e)
        }
    },
    components: {
        Table
    }
}
</script>


