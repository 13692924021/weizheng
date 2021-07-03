import emedia from 'easemob-emedia';

import config from "./websdkconfig.js"

emedia.config({
    appkey: config.appkey, // 从环信后台 获取的appkey、必填
    consoleLogger: true, // boolean 是否开启打印日志，默认true
 });

export {emedia} 