<template>
<div class="nav">
  <header class="headerbar">
        <div class="headerbar-left">
            <router-link to="/my" class="navigation">
              <van-icon name="arrow-left" /></router-link>
        </div>
        <div class="headerbar-center">
            <p class="headerbar-content">购物车</p>
        </div>
        <div class="headerbar-right">
        </div>
    </header>
    <!-- Main -->
    <section class="main">
        <div class="emptycart">
            <img class="img" src="https://img02.hua.com/m/images/m_emptycart.png" alt="">
            <p class="text">这里什么都没有呀...</p>   
        </div>
        <cart></cart>
    </section>
   <TabBar ></TabBar>
    </div>
</template>
<script>
import TabBar from "../views/TabBar.vue";
import cart from "../cart/Carts.vue"
export default {
   components:{
     cart,
     TabBar
   }
};
</script>
<style lang="less" scoped>
@import '~style/index.less';
.nav{
  background: #E9ECF0;
  width: 100%;
  height: 100%;
}
.headerbar{
  .h(40);
  display: flex;
     .l_h(40);
    background: #fff;
    font-size: 13px;
}
.headerbar-left {
    text-align: left;
    .w(81);
}
.headerbar-left > .navigation{
  display: inline-block;
    .w(40);
    .h(40);
    text-align: center;
    font-size: 18px;
    font-family: SourceHanSansCN, -apple-system, Verdana, Arial, Helvetica, sans-serif;
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    .l_h(40)
}
.headerbar-center {
  flex:1;
  text-align: center;
  .w(195);
  font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
 div{
    border: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .headerbar-right {
    text-align: right;
    .w(81);
}

section.main .emptycart {
    border-top: 1px solid #E9ECF0;
    background-color: #fff;
    text-align: center;
 .h(196);
}
section.main .emptycart img.img {
 .w(94);
  .h(94);
  padding-top: 30px;
}
section.main .emptycart p.text {
  margin-top: 0.3rem;
  color: #232628;
  font-size: 13px;
}
 
</style>