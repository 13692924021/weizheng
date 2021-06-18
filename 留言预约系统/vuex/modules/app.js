export default {
    state: {
        lang: "zh-TW",
		imgUrl: "https://acarepro.online/IMGPATH/",
    },
    mutations: {
        setAppData (state, data) {
            state[data.key] = data.value
        }
    },
    actions: {

    }
}