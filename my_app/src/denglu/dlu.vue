<template>
<div>
  <header class="headerbar">
            <div class="headerbar-left">
                <router-link to="" class="navigation">
                    <van-icon name="arrow-left" class="add" />
                </router-link>
            </div>
            <div class="headerbar-center">
                <p class="headerbar-content">登录注册</p>
            </div>
            <div class="headerbar-right">
                <div @click="toggleCategoryMenu" class="navigation headerbar-menu-toggle">
                    <van-icon name="bars" class="add1"/>
                    <!--HeaderBarMenu-->
                    <nav class="headerbar-menu" id="headerbarMenu" v-show="show">
                        <div class="headerbar-menu-item" >
                            <a href="/" class="navigation"><i class="iconfont iconfont-home"></i><span>首页</span></a>
                        </div>
                        <div class="headerbar-menu-item">
                            <a href="/all.html" class="navigation">
                                <i class="iconfont iconfont-category"></i><span>分类搜索</span>
                            </a>
                        </div>
                        <div class="headerbar-menu-item">
                            <a href="/Shopping/ShowCart/" class="navigation">
                                <i class="iconfont iconfont-shopcart" id="cartCount"></i><span>购物车</span>
                            </a>
                        </div>
                        <div class="headerbar-menu-item">
                            <a href="/member/membercenter/" class="navigation">
                                <i class="iconfont iconfont-smile"></i><span>我的</span>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
  <div class="hualogo">
            <img src="https://img02.hua.com/m/login/wx_login_logo.png" />
        </div>
</div>
  
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods:{
    toggleCategoryMenu(){
      
      this.show = !this.show
    }
  }
}
</script>

<style lang="less" scoped>
@import '~style/index.less';
.headerbar {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  .h(40);
  .l_h(40);
  background: #fff;
  
}
.headerbar-left,
.headerbar-right {
  .w(81);
  .h(40);
}
.headerbar-left >.navigation,
.headerbar-right > .navigation {
  display: inline-block;
  .w(40);
  .h(40);
  text-align: center;
}
.headerbar-left > .navigation .add,
.headerbar-right > .navigation .add1 {
  font-size: 20px;
  .l_h(40);
}
.headerbar-left {
  text-align: left;
}
.headerbar-right {
  text-align: right;
}
.headerbar-center {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  .w(196);
  text-align: center;
}
.headerbar-content {
  font-size: 15px;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.headerbar-menu {
  position: absolute;
  .w(100);
 bottom: 70%;
  right: 0.3rem;
  z-index: 9;
  background: #fff;
  border: 1px solid #E9ECF0;
  border-radius: 0.1rem;
  -webkit-box-shadow: 0 4px 12px 0 #E9ECF0;
  box-shadow: 0 4px 12px 0 #E9ECF0;
  
}
.headerbar-menu.active {
  display: block;
}
.hualogo {
    text-align: center;
    margin-top: 1rem;
}
.hualogo > img {
    .w(170);
    .h(22);
}
</style>