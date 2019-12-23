<template>
  <div>
    <header class="headerbar">
      <div class="headerbar-left">
        <div class="navigation" @click="back">
          <van-icon name="arrow-left" class="add" />
        </div>
      </div>
      <div class="headerbar-center">
        <p class="headerbar-content">登录注册</p>
      </div>
      <div class="headerbar-right">
        <div @click="toggleCategoryMenu" class="navigation headerbar-menu-toggle">
          <van-icon name="bars" class="add1" />
          <!--HeaderBarMenu-->
          <nav class="headerbar-menu" id="headerbarMenu" v-show="show">
            <div class="headerbar-menu-item">
              <a href="/" class="navigation">
                <i class="iconfont iconfont-home"></i>
                <span>首页</span>
              </a>
            </div>
            <div class="headerbar-menu-item">
              <a href="/all.html" class="navigation">
                <i class="iconfont iconfont-category"></i>
                <span>分类搜索</span>
              </a>
            </div>
            <div class="headerbar-menu-item">
              <a href="/Shopping/ShowCart/" class="navigation">
                <i class="iconfont iconfont-shopcart" id="cartCount"></i>
                <span>购物车</span>
              </a>
            </div>
            <div class="headerbar-menu-item">
              <a href="/member/membercenter/" class="navigation">
                <i class="iconfont iconfont-smile"></i>
                <span>我的</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <div class="hualogo">
      <img src="https://img02.hua.com/m/login/wx_login_logo.png" />
    </div>
    <div class="login"> 
      
            <div class="login-item">
                <div class="login-item-title">手机号</div>
                <div class="login-item-info">
                    <input placeholder="请输入手机号" autocomplete="off" type="tel"  />
                    <div class="login-item-info-icon" >
                        <i class="iconfont iconfont-emptytext"></i>
                    </div>
                </div>
            </div>
            <div class="login-item">
                <div class="login-item-title">验证码</div>
                <div class="login-item-info">
                    <input placeholder="请输入验证码"   />
                    <div class="login-item-info-icon">
                        <i class="iconfont iconfont-emptytext"></i>
                    </div>
                    <div >获取验证码</div>
            </div>
           
        </div>
         <button class="to-login" >手机登录/注册</button>
            <div class="login-by-password" >账号密码登录</div>
    </div>
     <div class="quick">
            <div class="quick-tips">其他登录方式</div>
            <div class="quick-bubble" style="">
            </div>
            <div class="quick-login">
                <div class="quick-login-item" onclick="window.location.href='/Passport/QQ/Login'">
                    <i class="iconfont icon-qq-copy"></i>
                    <span>QQ</span>
                </div>
                <div class="quick-login-item" onclick="window.location.href='/Passport/Alipay/Login'">
                    <i class="iconfont icon-zfbpay"></i>
                    <span>支付宝</span>
                </div>
                <div class="quick-login-item" onclick="window.location.href='/Passport/Register/EmailRegister'">
                    <i class="iconfont icon-youxiang"></i>
                    <span>邮箱注册</span>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Field } from "vant";
import {mapState,mapActions} from 'vuex'
Vue.use(Field);
export default {
  data() {
    return {
      show: false,
      username: "",
      sms: ""
    };
  },
  methods: {
    toggleCategoryMenu() {
      this.show = !this.show;
    },
    back(){
      history.back()
      //this.$store.commit('change_footer_show',true)
    },
    // change_footer_show() {
    //   this.$store.commit('change_footer_show',false)
    // }
  
      
  },
  // created() {
  //   this.$emit('footer',false)
  // }
  // created() {
  //   this.change_footer_show()
  // }
};
</script>

<style lang="less" scoped>
@import "~style/index.less";
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
.headerbar-left > .navigation,
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
  border: 1px solid #e9ecf0;
  border-radius: 0.1rem;
  -webkit-box-shadow: 0 4px 12px 0 #e9ecf0;
  box-shadow: 0 4px 12px 0 #e9ecf0;
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
.login {
  margin-top: 1rem;
  width: 80%;
  .h(252);
  margin-left:1rem;
}
.login-item {
  border-bottom: 0.04rem #e9ecf0 solid;
  
}
.login-item + .login-item {
  margin-top: 1rem;
  
}
.login-item-tips {
  font-size: 15px;
  color: #ff734c;
  margin-bottom: 1.78571429rem;
  margin-top: 0.14285714rem;
}
.login-item-title {
  font-size: 15px;
}
.login-item-info {
  margin-top: 0.1rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.login-item-info > input {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 15px;
  outline: none;
  border: none;
  padding: 0.2rem 0 0.2rem 0rem;
  color: #232628;
}
input::-webkit-input-placeholder {
  font-size: 15px;
  color: #B4BABF;
}
input::-moz-placeholder {
  font-size: 15px;
  color: #B4BABF;
}
.login-item-info-icon {
  
  text-align: center;
  cursor: pointer;
  color: #b4babf;
}
.login-item-info-btn {
  padding: 0.28571429rem 0.57142857rem;
  color: #71797f;
  font-size: 0.92857143rem;
  white-space: nowrap;
  text-align: center;
}
.login-item-info-btn.active {
  color: #ff734c;
}
.to-login {
  margin-top: 1rem;
  .h(45);
  .l_h(45);
  background: #ff734c;
  color: #fff;
  font-size: 18px;
  border-radius: 1.5rem;
  width: 100%;
  text-align: center;
  border: 0.07142857rem solid #ff734c;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.login-by-password {
  margin-top: 0.5rem;
  color: #71797f;
  font-size: 18px;
  text-align: center;
}

.quick {
  margin: 2rem auto 0.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  width: 89.4%;
}
.quick-tips {
  color: rgba(0, 0, 0, 0.2);
  .w(130);
  margin: -0.3rem auto 0.7rem;
  background: #fff;
  text-align: center;
  font-size: 16px;
}
.quick-bubble {
  width: 75%;
  margin: auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.quick-bubble-content {
  width: 2rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  background: url(https://img02.hua.com/m/images/m_login_bubble.png) no-repeat;
  background-size: cover;
  background-position: top center;
  font-size: 0.78571429rem;
  color: #71797F;
}
.quick-login {
  .h(22);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.quick-login-item {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: 100%;
  .l_h(22);
  text-align: center;
}
.quick-login-item .iconfont {
  color: #1CACEA;
  font-size: 27px;
  vertical-align: middle;
}
.quick-login-item span {
  margin-left: 0.25rem;
  font-size: 15px;
}

</style>