import { reactive } from "vue"

const store = reactive({
    count: 1,
    setCount () {
        this.count++
    }
})

export default store