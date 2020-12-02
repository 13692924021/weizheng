<style lang="less" scoped>
.fixWrap {
    width: 100px;
    height: 80px;
    position: fixed;
    z-index:200;
    right: 40px;
    bottom: 00px;
    // border: solid red 1px;
    >div {
        padding: 0.3em;
        color: #FFF;
        >span {
            padding-left: 0.5em;
        }
        cursor: pointer;
    }
    >div:first-child {
        background: rgba(16, 36, 82, 0.8);
    }
    >div:last-child {
        background: rgba(33, 33, 33, 0.8);
    }
}

</style>

<template>
    <div class="fixWrap">
        <div class="al ju" @click="back">
            <Icon type="ios-arrow-back" />
            <span>上一頁</span>
        </div>
        <br>
        <div class="al ju" @click="backTop">
          <Icon type="ios-arrow-up" />
          <span>回到頂部</span>
      </div>
    </div>
</template>

<script>
export default {
    methods:{
        back () {
            this.$router.back()
        },
        backTop () {
            document.getElementsByClassName("content-wrapper")[0].scrollTop = 0
        }
    }
}
</script>

