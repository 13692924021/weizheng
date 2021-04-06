<template>
    <div>
        <myNav :list="nav" :active="0" :num="6"> </myNav>
    </div>
</template>

<script>
export default {
    data () {
        return {
            nav: []
        }
    },
    created () {
        for (let i=0;i<30;i++) {
            this.nav.push({
                name: `第${i+1}页`
            })
        }

    }
}
</script>

<style lang="less" scoped>

</style>