import { reactive } from "vue"
import CN from "@/locale/language/zh-CN"
import TW from "@/locale/language/zh-TW"
import EN from "@/locale/language/en-US"
const message:any = {
    "zh-CN":CN,
    "zh-TW":TW,
    "en-US":EN,
}
let current = localStorage.getItem("lang")


const lang = reactive({
    current: current ? current : "zh-TW", //当前语言
    l (key: any):any {                    //返回所需语言
        return message[this.current][key] ? message[this.current][key] : key
    },
    setLang (key:string) {                      //切换语言并存localStorage
        this.current = key
        localStorage.setItem("lang",key)
    }
})

export default lang