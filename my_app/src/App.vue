<template>
    <div id="app">
        <router-view />
        <TabBar></TabBar>
    </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";
import TabBar from "views/TabBar.vue";
Vue.use(Icon);

export default {
    components: {
        TabBar
    }
};
</script>
<style lang="less">
#app {
    width: 100%;
    height: 100%;
}
body {
    color: #232628;
    font-family: SourceHanSansCN, -apple-system, Verdana, Arial, Helvetica,
        sans-serif;
    -webkit-tap-highlight-color: transparent;
    font-size: 14px;
    box-sizing: border-box;
}
</style>
