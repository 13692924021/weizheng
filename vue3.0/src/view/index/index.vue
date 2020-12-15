<style lang="scss" scoped>
.fixMenu {
    width: 120px;
    background:#36528A;
    position: fixed;
    top: 50%;
    right: 0;
    // box-shadow: 0 0 5px #FFF;
    transform: translateY(-50%);
    border: solid #FCFCFC 1px;
    transition: 0.8s;
    border-radius: 0.3em;
    overflow:hidden;
    >li {
        text-align:center;
        border-top: solid #FCFCFC 1px;
        transition: 0.5s;
        &:hover {
            background:#3058a8 !important;
        }
        a {
            display: inline-block;
            width: 100%;
            height: 100%;
            cursor: pointer;
            padding: 0.5em 0;
        }
    }
    >li:first-child {
        border: none !important;
    }
    &:hover {
        box-shadow: 0 0 5px #FFF,0 0 15px #FFF,0 0 25px #FFF !important;
    }
}
.menuIcon {
    width: 40px;
    height: 40px;
    background: #000;
    position: fixed;
    left: 5px;
    top: 5px;
    >div {
        border-top: solid #FFF 1px;
        width: 70%;
        margin: auto;
    }
    display: flex;
    padding: 0.5em 0;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
    transition: 0.8s;
    &:hover {
        box-shadow: 0 0 5px #FFF ;
    }
}

</style>

<template>
    <div>
        <ul class="fixMenu">
            <li><a>Home</a></li>
            <li><a>About Us</a></li>
            <li><a>Contact Us</a></li>
        </ul>
        <el-backtop right="20" bottom="20" ></el-backtop>
        <div class="menuIcon" @click="drawer=true">
            <div></div><div></div><div></div>
        </div>

        <el-drawer
            v-model="drawer"
            size="300px"
            :direction="'ltr'"
             destroy-on-close>
             <div class="drawerMain">
                menu
             </div>
        </el-drawer>


        <div class="container">
            <el-select @change="change" :placeholder="lang.l('test')">
                <el-option value="zh-CN">zh-CN</el-option>
                <el-option value="zh-TW">zh-TW</el-option>
                <el-option value="en-US">en-US</el-option>
            </el-select>
            <!-- <h3>{{lang.l("test")}}</h3> -->
            <h3>{{lang.l("test")}}</h3>
        </div>


    </div>
</template>

<script>

export default {
    inject: ["store","lang"],
    data () {
        return {
            drawer: false,
        }
    },
    created () {

    },
    methods:{
        change (e) {
            // console.log(e)
            this.lang.setLang(e)
        }
    }
    
}
</script>

