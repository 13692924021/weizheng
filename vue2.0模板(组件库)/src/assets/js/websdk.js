import config from "./websdkconfig.js"

import WebIM from "easemob-websdk"
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


export {conn, WebIM}