import config from "./websdkconfig.js"

import WebIM from "easemob-websdk"
import webrtc from 'easemob-webrtc'



WebIM.config = config
const conn = WebIM.conn = new WebIM.connection({
    appKey: WebIM.config.appkey,
    isHttpDNS: WebIM.config.isHttpDNS,
    isMultiLoginSessions: WebIM.config.isMultiLoginSessions,
    https: WebIM.config.https,
    url: WebIM.config.socketServer,
    apiUrl: WebIM.config.restServer,
    isAutoLogin: WebIM.config.isAutoLogin,
    autoReconnectNumMax: WebIM.config.autoReconnectNumMax,
    autoReconnectInterval: WebIM.config.autoReconnectInterval,
    delivery: WebIM.config.delivery,
    useOwnUploadFun: WebIM.config.useOwnUploadFun
})

conn.listen({
    onOpened (e) {
        console.log('open', e)
    },
    onClosed () {
        console.log("close")
    },
    onTextMessage: function ( e ) {   //收到文本消息
        console.log('msg', e)
    }, 
})

// 注册
var options = { 
    username: 'lwz2',
    password: '123456',
    nickname: '张大炮',
    appKey: WebIM.config.appkey,
    success: function (res) {
        console.log('success',res)
    },  
    error: function (err) {
        let errorData = JSON.parse(err.data);
        if (errorData.error === 'duplicate_unique_property_exists') {
            console.log('用户已存在！');
        } else if (errorData.error === 'illegal_argument') {
            if (errorData.error_description === 'USERNAME_TOO_LONG') {
                console.log('用户名超过64个字节！')
            }else{
                console.log('用户名不合法！')
            }
        } else if (errorData.error === 'unauthorized') {
            console.log('注册失败，无权限！')
        } else if (errorData.error === 'resource_limited') {
            console.log('您的App用户注册数量已达上限,请升级至企业版！')
        }
    }, 
}; 
//  conn.registerUser(options);

// 登录
var options = { 
    user: 'lwz',
    pwd: '123456',
    appKey: WebIM.config.appkey,
    success (res) {
        console.log(res)
    },
    error (e) {
        console.log(e)
    }
};
// conn.open(options);

var call = new webrtc.Call({
    connection: conn, // WebIM 的链接信息
    mediaStreamConstaints: {
            audio: true,
            video: true
            /**
            * 修改默认摄像头，可以按照以下设置，不支持视频过程中切换
            * video:{ 'facingMode': "user" } 调用前置摄像头
            * video: { facingMode: { exact: "environment" } } 后置
            */
    },

    listener: {
        //主叫收到 被叫 点接通
        onAcceptCall: function (from, options) {
            console.log('onAcceptCall:: 对方点了接听', 'from: ', from, 'options: ', options);
        },
        //通过streamType区分视频流和音频流，streamType: 'VOICE'(音频流)，'VIDEO'(视频流)
        onGotRemoteStream: function (stream, streamType) {
            console.log('onGotRemoteStream::', 'stream: ', stream, 'streamType: ', streamType);
            var video = document.getElementById('video');
            video.srcObject = stream;
            video.play();
        },
        
        onGotLocalStream: function (stream, streamType) {
            console.log('onGotLocalStream::接通， 建立视频！！！', 'stream:', stream, 'streamType: ', streamType);
            var video = document.getElementById('localVideo');
            video.srcObject = JSON.parse(JSON.stringify(stream));
            video.play();

        },
        // 被叫方收到呼叫
        onRinging: function (caller, streamType) {
                        console.log("onRinging 电话来啦！！！", caller)
        },
        //收到通话结束回调
        onTermCall: function (reason) {
            console.log('onTermCall::挂断');
            console.log('reason:', reason);
        },
        onIceConnectionStateChange: function (iceState) {
            console.log('onIceConnectionStateChange::', 'iceState:', iceState);
        },
        // 通话断网监听
        onNetWorkDisconnect(endType) { // endType: local || remote, 哪一端断网
            console.log('1v1 onNetWorkDisconnect', endType);
        },
        onError: function (e) {
            console.log(e);
        }
     }
});


export {conn, WebIM, call}