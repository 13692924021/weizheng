<template>
    <div>
        <div>
            <Button type="primary" @click="login">登录</Button>
            <Button type="primary" @click="logout">登出</Button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods:{
        login () {
            var options = { 
                user: 'lwz',
                pwd: '123456',
                appKey: this.$WebIM.config.appkey,
                success (res) {
                    console.log(res)
                },
                error (e) {
                    console.log(e)
                }
            };
            this.$conn.open(options);
        },
        logout () {
            this.$conn.close()
        }
    }
}
</script>

<style>

</style>