<style lang="less" scoped>
.borderMove {
    >i:first-child {
        width: 100%;
        height: 2px;
        left: -100%;
        top: 0;
    }
    &:hover > i:first-child {
        left: 0 !important;
    }

    >i:nth-of-type(2) {
        width: 2px;
        height: 100%;
        right: 0%;
        top: -100%;
    }
    &:hover > i:nth-of-type(2) {
        top: 0 !important;
    }
    >i:nth-of-type(3) {
        height: 2px;
        width: 100%;
        left: 100%;
        bottom: 0%;
    }
    &:hover > i:nth-of-type(3) {
        left: 0 !important;
    }

    >i:nth-of-type(4) {
        width: 2px;
        height: 100%;
        left: 0%;
        top: 100%;
    }
    &:hover > i:nth-of-type(4) {
        top: 0% !important;
    }
    &:hover {
        box-shadow: 0 0 10px #6495ED;
    }


    position: relative;
    overflow:hidden;
    transition: 0.3s;
    outline: none;
    border: none;
    display: inline-block;
    background: cornflowerblue;
    padding: 0.5em 2em;
    color: #FFF;
    cursor: pointer;

    >i {
        position: absolute;
        background: #011604;
        transition: 0.3s;
    }
}

</style>

<template>
   <div>
       <button class="borderMove op">
           <i></i><i></i><i></i><i></i>
           <span>Button</span>
       </button>
           
   </div>
</template>

<script>
export default {

}
</script>

