<template>
  <div id="app">
  
    <router-view/>
  <nav class="tabbar">
        <div class="tabbar-item active">
            <a href="" class="navigation">
               <van-icon name="wap-home-o" style="font-size:24px" />
                <p>首页</p>
            </a>
        </div>
        <div class="tabbar-item">
            <a href="" class="navigation">
                <van-icon name="coupon-o" style="font-size:24px" />
                <p>分类</p>
            </a>
        </div>
        <div class="tabbar-item" data>
            <a href="" class="navigation">
                <van-icon name="cart-circle-o" style="font-size:24px"/>
                <p>购物车</p>
            </a>
        </div>
        <div class="tabbar-item">
            <a href="" class="navigation">
               <van-icon name="user-circle-o"  style="font-size:24px"/>
                <p>我的</p>
            </a>
        </div>
    </nav>
  </div>
</template>
<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);

export default {
  name: 'home',
  components: {
  
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
.tabbar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    display: flex;
    -webkit-box-align: center;
        align-items: center;
            height: 3.5rem;
    overflow: hidden;
    background: #F7F9FA;
    border: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "iconfont" !important;
}
a {
  text-decoration: none;
  color: inherit;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  -webkit-focus-ring-color: transparent;
}
.tabbar-item.active {
    color: #FF734C;
}
.tabbar-item{
  flex: 1;
  text-align: center;
  -webkit-box-flex: 1;

}
.tabbar-item > .navigation {
  height: 3.5rem;
  padding-top: 0.28571429rem;
  box-sizing: border-box;
}


</style>
