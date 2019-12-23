<template>
<div>
    <div class="nav">
                    <!-- 头部 -->
        <header class="headerbar">
            <div class="headerbar-left">
                <router-link to="/home" class="navigation"><van-icon name="arrow-left" /></router-link>
            </div>
            <div class="headerbar-center">
                <p class="headerbar-content">个人中心</p>
            </div>
            <div class="headerbar-right"></div>
        </header>
         <section class="main">
          <!--Dev::第三方登录:添加class：userinformation-hastips-->
        <div class="userinformation  ">
                <div class="userinformation-notlogin">
                    <p class="userinformation-notlogin-hi">Hi,欢迎来到花礼网</p>
                   <van-button round type="info" class="userinformation-notlogin-gologin" @click="jump">
                        登录/注册
                   </van-button>
                </div>
            <!--Dev::第三方登录-->
        </div>
        <Haha></Haha>    
        <jilu></jilu>
        <Kefu></Kefu>
        <bz></bz>
         </section>
</div>
<TabBar ></TabBar>

    </div>
</template>

<script>
import TabBar from "../views/TabBar.vue";
import Haha from '../wode/1.vue'
import jilu from '../wode/2.vue'
import Kefu from '../wode/3.vue'
import bz from '../wode/4.vue'


    export default {
        components: {
            Haha,
            jilu,
            Kefu,
            bz,
             TabBar

        },
        methods: {
            jump() {
                this.$router.push({path:'/Passport/Login'})
            }
        }
    }
</script>

<style scoped lang="less">
@import '~style/index.less';
.nav{
    width: 100%;
    height: 100%;
}
.headerbar{
    width: 100%;
   .h(44);
   display: flex;
   .l_h(44);
    background: #fff;
    -webkit-tap-highlight-color: transparent;
}
.headerbar-left {
    text-align: left;
    .w(88);
    .h(44);
    font-size:20px;
    border: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    display: block;
}  
.headerbar-left > .navigation{
    display: inline-block;
    .w(44);
    .h(44);
    text-align: center;
}
a {
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: transparent;
    outline: none;
}
.headerbar .headerbar-center {
  font-size: 17px;
    .w(200);
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap
}
.headerbar-right {
    text-align: right;
    .w(88);
}
.main{
    width: 100%;
    height: 100%;
    background-image: url('https://img02.hua.com/m/member/center/backgroundv3.png');
    background-repeat:no-repeat;
    background-size: 100%;
    background-color: rgb(235, 232, 232);
}
.userinformation {
    display: flex;
    width: 100%;
    .h(104);
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
}
.userinformation-notlogin-hi {
    color: #fff;
    font-size: 13px;
}
.userinformation-notlogin-gologin {
    margin-top: 10px;
    text-align: center;
    background-color: #fff;
    color: black;
    border: none;
    .w(117);
    .h(33);
    .l_h(33);
    font-size: 15px;
    font-family: SourceHanSansCN, -apple-system, Verdana, Arial, Helvetica, sans-serif;
}

</style>