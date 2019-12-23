<template>

      <header class="headerbar">
        <div class="headerbar-left">
            <router-link to="/category">
              <i class="iconfont icon-fenlei2"  />
            </router-link>
        </div>
        <div class="headerbar-logo"><img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png" /></div>
        <div class="headerbar-right" id=onlineChat>
                <router-link to="">
                       <van-icon name="service-o"/>
                </router-link>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import "~style/index.less";
.headerbar {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  .h(44.56);
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  background: #435448;
  overflow: hidden;
  color: #fff;
}
.headerbar .iconfont {
  font-size: 22px;
}
.headerbar > .headerbar-logo > img {
  .w(139);
  .h(19)
}
.headerbar > .headerbar-logo {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
}
.headerbar-left {
  padding-left: 0.2rem;
}
.headerbar-right {
  padding-right: 0.2rem;
  text-align: right;
}
.headerbar > .headerbar-left,
.headerbar > .headerbar-right {
  .w(23);
  .h(22);
  .l_h(22);
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  font-size: 22px;
}
</style>