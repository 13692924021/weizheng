<style lang="less" scoped>
@import url("~@/assets/css/color.less");
.list-wrap {
    padding: 1% 0% 1% 1%;
    @media screen and (min-width: 1600px) and (max-width: 2000px) {
        border: solid blue 2px;
    }
    @media screen and (min-width: 564px) and (max-width: 1599px) {
        border: solid green 2px;
    }
    @media screen and (max-width: 563px) {
        border: solid black 2px;
    }

    div {
        border: solid #000 2px;
        float: left;
        height: 300px;
        margin-right: 1%;
        margin-bottom: 1%;
        @media screen and (min-width: 1600px) and (max-width: 2000px) {
            width: 19%;
        }
        @media screen and (min-width: 1200px) and (max-width: 1599px) {
            width: 24%;
        }
        @media screen and (min-width: 564px) and (max-width: 1199px) {
            width: 32%;
        }
        @media screen and (max-width: 563px) {
            width: 99%;
        }
    }
}
</style>

<template>
    <div class="list-wrap clearBoth">
        <div v-for="(item,i) in 50" :key="i">{{i}}</div>
    </div>
</template>

<script>
export default {

}
</script>

