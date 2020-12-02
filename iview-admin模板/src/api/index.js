import axios from "axios"

axios.interceptors.request.use(config => {
    config.headers.Authorization = "JWT " + localStorage.getItem("JWT")
    return config
})

export default axios