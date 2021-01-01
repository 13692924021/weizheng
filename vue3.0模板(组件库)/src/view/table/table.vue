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
                { title: "type",key: 'type' },
            ],
            list: [
                
                {
                    id: 1,
                    name: "name1",
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
    }
}
</script>

<style>

</style>