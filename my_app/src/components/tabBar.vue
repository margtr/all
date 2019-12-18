<template>
    <div>
<nav class="tabbar">
      
            <router-link to="/1" class="tabbar-item active" tag=
            "div" >
               <van-icon name="wap-home-o" style="font-size:24px" />
                <p>首页</p>
            </router-link>
       
        <div class="tabbar-item">
            <router-link  to="/2" class="navigation">
                <van-icon name="coupon-o" style="font-size:24px" />
                <p>分类</p>
            </router-link>
        </div>
        <div class="tabbar-item" data>
            <router-link to="/3" class="navigation">
                <van-icon name="shopping-cart-o" style="font-size:24px"/>
                <p>购物车</p>
            </router-link>
        </div>
        <div class="tabbar-item">
            <router-link to="/4" class="navigation">
               <van-icon name="user-circle-o"  style="font-size:24px"/>
                <p>我的</p>
            </router-link>
        </div>
    </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>

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

.tabbar-item{
  flex: 1;
  text-align: center;
  -webkit-box-flex: 1;

}
.tabbar-item > .navigation {
  height: 3.5rem;
  padding-top: 0.28571429rem;
  box-sizing: border-box;
  display: block;
}
.router-link-active{ 
    color:red
}

</style>