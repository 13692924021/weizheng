<template>
    <div>
        <router-link to="/">test</router-link>
        <router-link to="/test2">test2</router-link>
        <router-link to="/test3">test3</router-link>
        <div>
            <router-view></router-view>
        </div>
        
    </div>
</template>

<script>

export default {
    name: 'App',

}
</script>

<style>

</style>
