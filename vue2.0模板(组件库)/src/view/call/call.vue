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
            user: "lwzA1",
            pwd: "123456",
            user1: "lwz2",
            pwd1: "123456",
            client: {},
            client1: {},
            emedia: null
        }
    },
    created () {

    },
    beforeDestroy () {
        this.emedia.mgr.exitConference()
    },
    methods:{
        endCall () {

        },
        acceptCall () {

        },
        call () {
            
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
                user: this.user,
                pwd: this.pwd,
                appKey: this.$WebIM.config.appkey,
                async success (res) {
                    console.log(res)
                    that.client = res.user

                    let memName = "1115210517085955#972307875_" + this.user
                    that.emedia = require("@/assets/js/emedia.js").emedia
                    // console.log(that.emedia,memName, res.access_token)
                    that.emedia.mgr.setIdentity(memName, res.access_token)

                    var params = {
                        roomName: this.user, // string 房间名称 必需
                        password:"123456", // string 房间密码 必需
                        role: 3,  // number 进入会议的角色 1: 观众  3:主播 必需
                        config:{
                            rec:false, //是否开启录制会议
                            recMerge:false, //是否开启合并录制
                            supportWechatMiniProgram: true //是否允许小程序加入会议
                        }
                    }

                    const user_room = await emedia.mgr.joinRoom(params);
                    // console.log(user_room)

                    var constaints = { // 发布音频流的配置参数, Object 必需。 video或audio属性 至少存在一个
                        audio: true, // 是否发布音频
                        video: true  // 是否发布视频
                    }
                    var ext = {} // 发布流的扩展信息 Object 非必需。会议其他成员可接收到

                    const pushedStream = await that.emedia.mgr.publish(constaints, ext);
                    console.log(111,pushedStream)
                    var videoTag = document.getElementById('localVideo') //需要显示本地流的 video 标签
                    emedia.mgr.streamBindVideo(pushedStream, videoTag);

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
            this.emedia.mgr.exitConference()
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