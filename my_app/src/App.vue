<template>
  <div id="app">
  <router-view></router-view>
    <tabBar></tabBar>
  
  </div>
</template>
<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
import tabBar from "./components/tabBar.vue"
export default {
  name: 'home',
  components: {
  tabBar
  }
}
</script>
<style lang="less">
#app {
width: 100%;
height: 100%;
}
body {
  color: #232628;
    font-family: SourceHanSansCN, -apple-system, Verdana, Arial, Helvetica, sans-serif;
    -webkit-tap-highlight-color: transparent;
    font-size: 14px;
    box-sizing: border-box;
}
</style>
