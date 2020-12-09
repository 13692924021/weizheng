import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)


import Text from "@/components/test.vue"
app.component("Text",Text)
app.provide('user', 'administrator')

app.mount('#app') 


