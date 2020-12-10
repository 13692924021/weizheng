import {reactive} from "vue"

export const state = reactive({
    total: 100,

    setTotal () {
        this.total++
    }
})