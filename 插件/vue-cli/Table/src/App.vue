<template>
    <div id="app">
        <Table :columns="columns" :list="list" @on-check="onCheck"></Table>
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
                    title: "年龄",
                    key: "age",
                    searchType: "select"
                    // width: "20%",
                },
                {
                    title: "生日",
                    key: "dob",
                    // width: "20%",
                    noSearch: true
                },
                {
                    title: "地区",
                    key: "place",
                    searchType: "select"
                    // width: "20%",
                },
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
    methods:{
        onCheck (e) {
            console.log(e)
        }
    },
    components: {
        Table
    }
}
</script>

<style>

</style>
