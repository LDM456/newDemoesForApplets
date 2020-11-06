<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import home from '@/views/home.vue';

 export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
}
</style>
