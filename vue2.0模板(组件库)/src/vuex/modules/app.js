export default {
    state: {
        lang: "zh-TW",
    },
    mutations: {
        setAppData (state, data) {
            state[data.key] = data.value
        }
    },
    actions: {

    }
}