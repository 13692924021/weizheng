import axios from "axios"

axios.defaults.baseURL = "https://acarepro.online/acarepro-kaifa-api/3.0.0/"

axios.interceptors.request.use(config => {
    config.headers = {
        
    }
    return config   
})

export default axios