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
        justify-content: space-between;
    }
    .sb {
        display: flex;
        justify-content: space-around;
    }
    .ju {
        display: flex;
        justify-content: center;
    }
    .al {
        display: flex;
        align-items: center;
    }
    ul {
        margin: 0;
        padding: 0;
        
    }
    li {
        list-style: none;
    }
    #app {
        // background: #102269;
        background:url("http://www.waterland.com.hk/wp-content/uploads/2016/05/waterlandBG.jpg") 100% 0% / 800px repeat scroll padding-box border-box rgb(18, 37, 103);
        min-height:100vh;
        color:#FFF;
    }
    .container {
        max-width: 1180px;
        border: solid #FFF 1px;
        margin: auto;
        
        padding: 1em;
        box-sizing: border-box;
    }
    .el-drawer {
        background: #212121 !important;;
    }
</style>

<template>
    <div class="">
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: "app",
        created () {
            // window.http({
            //     url: 'phone/login',
            //     method:"POST",
            //     data: {
            //         action: "password",
            //         password: "321",
            //         telephone: "123",
            //         type: 1,
            //         wid: "",
            //     },
            //     headers: {
            //         aaa:'123'
            //     }
            // }).then(res => {
            //     console.log(res)
            // }).catch(e => {
            //     console.log(e)
            // })
        }
    }
</script>


