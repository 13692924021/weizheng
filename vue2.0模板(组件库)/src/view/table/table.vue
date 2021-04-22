<template>
    <div>
        <myTable :columns="columns" :list="list"></myTable>
    </div>
</template>

<script>
export default {
    data () {
        return {
            columns: [
                { selection: true,  },
                { title: "ID",key: 'id' },
                { title: "name",key: 'name' },
                { title: "createAt",key: 'createAt', time: true },
                { title: "type",key: 'type',searchType: "select" },
            ],
            list: [
                {
                    id: 1,
                    name: "name1",
                    createAt: Date.now(),
                    type: 1
                },
                {
                    id: 2,
                    name: "name2",
                    type: 2
                },
                {
                    id: 3,
                    name: "name3",
                    type: 3
                },
                {
                    id: 4,
                    name: "name4",
                    type: 4
                },
                {
                    id: 5,
                    name: "name5",
                    type:5
                },
            ]
        }
    },
    created () {
        this.list=[]
        for(let i = 0;i< 50; i++) {
            this.list.push({
                id: i+1,
                name: "name" + (i+1),
                type: i % 3
            })
        }
    }
}
</script>

<style>

</style>