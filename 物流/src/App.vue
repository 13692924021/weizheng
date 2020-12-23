<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
body,html {
  margin: 0;
  padding: 0;
  
}
.ju {
  display: flex;
  justify-content: center;
}

.sp {
  display: flex;
  justify-content: space-between;
}
.sl {
  display: flex;
  justify-content: space-around;
}
.al {
  display: flex;
  align-items: center;
}
</style>
