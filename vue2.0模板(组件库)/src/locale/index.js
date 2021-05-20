import Vue from 'vue'
import store from "@/vuex/store.js"
import VueI18n from 'vue-i18n'
import customZhCn from './lang/zh-CN'
import customZhTw from './lang/zh-TW'
import customEnUs from './lang/en-US'
// import zhCnLocale from 'view-design/dist/locale/zh-CN'
// import enUsLocale from 'view-design/dist/locale/en-US'
// import zhTwLocale from 'view-design/dist/locale/zh-TW'

Vue.use(VueI18n)

let lang = localStorage.getItem("lang") || 'zh-TW'

store.commit("setAppData", { key: "lang", value: lang })

Vue.config.lang = lang

// vue-i18n 6.x+写法
Vue.locale = () => {}
const messages = {
//   'zh-CN': Object.assign(zhCnLocale, customZhCn),
//   'zh-TW': Object.assign(zhTwLocale, customZhTw),
//   'en-US': Object.assign(enUsLocale, customEnUs)
    'zh-CN':  customZhCn,
    'zh-TW':  customZhTw,
    'en-US':  customEnUs
}

const i18n = new VueI18n({
    locale: lang,
    messages,
    silentTranslationWarn: true            //  關閉所有警告
})

export default i18n
