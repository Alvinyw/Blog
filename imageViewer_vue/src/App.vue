<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  min-height: 100vh;
  background-color: #f9f9fa;
  font-family: 'PingFangSC', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  overflow-x: hidden;
}
</style>
