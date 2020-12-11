<style lang="scss">
    body,html{
        margin: 0;
        padding: 0;
        font-size: 14px;  
    }
    a{
        text-decoration: none;
    }
    .sa {
        display: flex;
        justify-content: space-around;
    }
    .nav {
        padding:2em 0;
        a {
            padding: 1em 3em;
            background: #978666;
            color: #FFF;
            border-radius: 1em;
            cursor: pointer;
            user-select: none;
            transition: 0.4s;
            &:hover {
                box-shadow: #333 2px 2px 5px;
            }
        }
    }
    .main {
        width: 96%;
        padding: 2em;
        min-height:500px;
        box-sizing: border-box;
        margin: auto;
        border: solid  #978666 2px;
        border-radius: 1em;
    }
</style>

<template>
    <div class="page">
        <el-select>

        </el-select>
        <nav class="nav sa">
            <router-link to="/">首页</router-link>
            <router-link to="/about">关于</router-link>
            <router-link to="/contact">联系</router-link>
        </nav>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app",

    }
</script>


