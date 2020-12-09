<template>
    <div>
        {{msg}}
        <button @click="add">按鈕</button>
        <br>
        <div>{{user}}</div>
        <div>
            <Text></Text>
            <Text></Text>
        </div>
    </div>
</template>

<script>
import { ref } from "vue"

export default {
    name: 'App',
    inject: ['user'],
    setup () {
        const msg = ref(2)
        const add = () => {
            msg.value++
        }
        // console.log(ref)
        return {
            msg,add
        }
    },
    
    created () { 
        console.log("created",this.$store)
    }
    // data () {
    //     return {
    //         msg: "123"
    //     }  
    // }
}
</script>

<style>

</style>
