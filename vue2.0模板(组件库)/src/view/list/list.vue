<template>
    <div>
        <div class="clearBoth">
            <div class="width50">
                <input type="text" v-model="user"><br>
                <input type="text" v-model="pwd"><br>
                <Button type="primary" @click="login">login</Button>
                <Button type="error" @click="logout">logout</Button>
                <p>uuid: {{client.uuid}}</p>
                <Button type="warning" @click="send">发送</Button><br>
                <Button type="warning" @click="call">打电话</Button><br>
                
            </div>
            <div class="width50">
                <input type="text" v-model="user1"><br>
                <input type="text" v-model="pwd1"><br>
                <Button type="primary" @click="login1">login</Button>
                <Button type="error" @click="logout">logout</Button>
                <p>uuid: {{client1.uuid}}</p>
                <Button @click="acceptCall">接听</Button>
                <Button @click="endCall">挂断</Button><br>
            </div>
        </div>

        <video id="localVideo"></video>
        <video id="video"></video>
    </div>
</template>

<script>
export default {
    data () {
        return {
            user: "lwz",
            pwd: "123456",
            user1: "lwz2",
            pwd1: "123456",
            client: {},
            client1: {}
        }
    },
    methods:{
        endCall () {
            this.$call.endCall()
        },
        acceptCall () {
            this.$call.acceptCall()
        },
        call () {
            let config = {
                push: false, // 对方(app端)不在线时是否推送
                timeoutTime: 30000, // 超时时间
                txtMsg: 'I gave you a video call.', // 给对方发送的消息
                pushMsg: 'user is calling you' //推送内容
            }
            this.$call.caller = '呼叫者'; // 指定呼叫方名字
            this.$call.makeVideoCall("lwz2",null,true,true,config);
        },
        send () {
            let id = this.$conn.getUniqueId();                 // 生成本地消息id
            let msg = new this.$WebIM.message('txt', id);      // 创建文本消息
            msg.set({
                msg: '张大炮',                  // 消息内容
                to: 'lwz2',                          // 接收消息对象（用户id）
                chatType: 'singleChat',                  // 设置为单聊
                                    //扩展消息
                success: function (id, serverMsgId) {
                    console.log('send private text Success');  
                }, 
                fail: function(e){
                    // 失败原因:
                    // e.type === '603' 被禁言
                    // e.type === '605' 群组不存在
                    // e.type === '602' 不在群组或聊天室中
                    // e.type === '504' 撤回消息时超出撤回时间
                    // e.type === '505' 未开通消息撤回
                    // e.type === '506' 没有在群组或聊天室白名单
                    // e.type === '503' 未知错误
                    console.log("Send private text error", e);  
                }
            });
            this.$conn.send(msg.body);
        },
        login () {
            let that = this
            var options = { 
                user: 'lwz',
                pwd: '123456',
                appKey: this.$WebIM.config.appkey,
                success (res) {
                    console.log(res)
                    that.client = res.user
                },
                error (e) {
                    console.log(e)
                }
            };
            this.$conn.open(options);
        },
        login1 () {
            let that = this
            var options = { 
                user: 'lwz2',
                pwd: '123456',
                appKey: this.$WebIM.config.appkey,
                success (res) {
                    console.log(res)
                    that.client1 = res.user
                },
                error (e) {
                    console.log(e)
                }
            };
            this.$conn.open(options);
        },
        logout () {
            this.$conn.close()
            this.client = {}
            this.client1 = {}
        }
    }
}
</script>

<style lang="less" scoped>
.width50 {
    width: 50%;
    border: solid #efefef 1px;
    padding: 30px;
}
#localVideo, #video {
    width: 300px;
    height: 300px;
    border: solid;
}
</style>