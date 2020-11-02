<template>
  <div id="app">
    <navigation></navigation>
     <router-view class="mt-3"></router-view>
  </div>
</template>

<script>
  import Navigation from "./components/Navigation.vue";

  export default {
    components: {
      "navigation": Navigation
    },
    data() {
      return { 
        
      }
    },
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
