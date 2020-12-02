<style scoped lang="less">
.msgWrap {
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: #DAC9E2;
    color: #FFF;
    cursor: pointer;
    position: relative;
    &:hover .msgItem {
        display:block !important;
    }
    margin-left: 10px;
}
.msgItem {
    position: absolute;left: 100%;
    top: 20%;
    width: 400px;
    padding: 1em;
    color:#333 !important;
    background: #FFF;
    border: solid #CCC 1px;
    border-radius: 10px;
    font-size:12px;
    box-shadow: 3px 3px 5px #666;
    z-index:200;
    display:none;
}
</style>

<template>
<div>
    <div class="msgWrap ju al size14" v-if="msg.length">
        ?
        <div class="msgItem" v-if="msg.length">
            <div v-for="(item,i) in msg" :key="i">{{item}}</div>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    props: {
        msg: {
            default: () => []
        }
    }
}
</script>

