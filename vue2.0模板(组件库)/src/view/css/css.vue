<style lang="less" scoped>
.cssWrap {
    // background: #000;
    min-height: 100%;
    padding: 30px;
}


</style>

<template>
   <div class="cssWrap">
       <button class="borderMove op btnHover">
           <i></i><i></i><i></i><i></i>
           <span>Button</span>
       </button>
        <br>
        <br>
        <Button class="btnHover" type="primary">iview btn</Button>
        <br><br>
        <div>
            <input type="text" ref="dom" v-model="num1">{{format(num1)}}
        </div>
   </div>
</template>

<script>
export default {
    data () {
        return {
            num1: 199.7777777
        }
    },
    mounted () {
        this.$refs.dom.value='123'
    },

}
</script>

