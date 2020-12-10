<template>
    <div>
        index
        <br>
        <h5>这是一条来自store的数据: {{store.count}}</h5>
        <button @click="store.setCount">修改这条数据</button>
    </div>
</template>

<script>
export default {
    inject: ["store"]
}
</script>

<style>

</style>