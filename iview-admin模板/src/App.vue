<template>
  <div id="app" class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
      let lang = localStorage.getItem("local")
      console.log(lang)
      if (lang) {
          this.$i18n.locale = lang
      }
  },
}
</script>

<style lang="less">
.size{
  width: 100%;
  height: 100%;
  min-width: 1310px; 
}
.app {
    background:url("~@/assets/images/bg.png") no-repeat;
    background-size: 120% auto ;
    background-position: 100% 120%;
    // border: solid;
}
html,body{
  .size;
  // overflow: hidden;
  margin: 0;
  padding: 0;
}
.ju {
  display: flex;
  justify-content: center;
}
.al {
  display: flex;
  align-items: center;
}
.sb {
  display: flex;
  justify-content: space-between;
}
.sa {
  display: flex;
  justify-content: space-around;
}
#app {
  .size;
}

div,textarea {
  scrollbar-color: #606060 #EFEFEF; /* 滑块颜色  滚动条背景颜色 */
  scrollbar-width: thin; /* 滚动条宽度有三种：thin、auto、none */
}
div::-webkit-scrollbar,textarea::-webkit-scrollbar {
  background: #EFEFEF;
  width: 10px !important;
}
div::-webkit-scrollbar-thumb,textarea::-webkit-scrollbar-thumb {
  background: #606060;
  
  border-radius:10px
}
div::-webkit-scrollbar-track,textarea::-webkit-scrollbar-track  {
  background: #EFEFEF;
}
// .Form {
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: flex-end;
//   padding-right: 30px;
// }
.bold {
  font-weight: bold;
}
.rela {
    position: relative;
}
.cur {
    cursor: pointer;
}
select,input{
    border: solid #CCC 1px;
    outline-color: #3A6366;
}
input {
    border: solid #CCC 1px;
}
.formItemWrap {
  display: flex;
  justify-content: flex-end;
  padding-right: 60px;
  align-items: center;
  margin: 20px auto;
}
ul,li {
  list-style: none;
}
.editBtn {
  margin-right: 5px;
}

.ivu-table-wrapper div {
  overflow: visible !important;
}
.ivu-table-cell, .ivu-table-row {
  overflow: visible;
}

.ivu-table-cell span {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.userselect {
    user-select: none;
}
.size15 {
    font-size: 15px;
}
.size16 {
    font-size: 16px;
}
.size17 {
    font-size: 17px;
}
.size18 {
    font-size: 18px;
}
.size19 {
    font-size: 19px;
}
.size20 {
    font-size: 20px;
}
.op:active {
    opacity:0.8 !important;
}
// .ivu-menu-item-active:not(.ivu-menu-submenu) {
//     color: #FFF !important;
// }
.ivu-menu-item-active:not(.ivu-menu-submenu) {
    color: #00366E !important;
}
.primaryBtn {
    padding: 5px 20px;
    background:  #0C539C;
    color: #FFF;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
    }
}
.darkBtn {
    padding: 5px 20px;
    background:  #444;
    color: #FFF;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
    }
}
.blueBtn {
    padding: 5px 20px;
    background:  #0C539C;
    color: #FFF;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
    }
}
.greenBtn {
    padding: 5px 20px;
    background:  #3A6366;
    color: #FFF;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
    }
}
.redBtn {
    padding: 5px 20px;
    background:  #E50000;
    color: #FFF;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
    }
}
textarea {
    border: solid #CCC 1px;
}

.content-wrapper{
  padding:5%;
}
.sinpBox {
    box-shadow:5px 5px 5px #CCC;
    padding: 10px;
    margin: 0px 0;
    background: #fff;
    border-radius: 5px;
}
.borderBox1 {
    border-top: solid 8px #3F706D;
    box-shadow: 5px 5px 5px #888;
    padding: 2em 3em;
    background-color: rgba(255,255,255,0.9);
    // font-size:12px;
}
.borderBox2 {
    border-top: solid 8px #0C539C;
    border-left: solid 1px #0c539c;
    border-right: solid 1px #0c539c;
    border-bottom: solid 1px #0a4e92;
    box-shadow: 5px 5px 5px #888;
    padding: 2em 3em;
    box-shadow: 2px 5px 6px 5px rgba(16, 44, 172, 0.25);
   background-color: rgba(255,255,255,0.9);
    // font-size:12px;
    // animation: fade 0.5s;
}
@keyframes fade {
    from {
        opacity: 0;
    }
    to {
        opacity:1
    }
}
.boxTitle {
    font-size: 20px;
    color: #0C539C;
}
.btnMargin {
    border-radius: 3px;
    margin: 5px;
    min-width: 130px;
    text-align:center;
}
.w-e-text-container {   //editor 的z-index
    z-index:10 !important;
}
.w-e-menu {   //editor 的z-index
    z-index:11 !important;
}
// .w-e-droplist {
//     z-index:11 !important;
// }
.ql-container {
    height: auto !important;
}
.blueTitle {
    // width: 20%;
    padding: 1em 2em;
    display: inline-block;
    color: #FFF;
    background: #00366E;
}
.blueBorder {
    min-height: 300px;
    padding: 1em 2em;
    border: solid #00366E 2px;
}
.priTable {
    width: 100%;
    >th,td {
        padding: 10px 0;
        text-align:center;
    }
    select,input {
        padding: 2px;
    }
}
.trline {
    // border-bottom: solid #00366E 1px;
    >th {
        position: relative;
        padding: 10px 0;
    }
    >th::after {
        width: 110%;
        position: absolute;
        content: "";
        display: block;
        height: 1px;
        border-top: solid #00366E 1px;
        left: -5%;
        bottom: 0;
    }
}
.alignLeft {
    text-align:left;
}
.org-tree-node-label {
    cursor:pointer;
    &:hover {
        box-shadow: 0 0 3px #444;
    }
}
</style>
