<template>
    <div class="tab-bar">
        <router-link to='/home'
                     class="navigation"
                     tag="div">
            <i class="iconfont icon-shouye1" 
                      style="font-size:24px;" />
            <p>首页</p>
        </router-link>
        <router-link to='/category'
                     class="navigation" tag="div">
            <i class="iconfont icon-fenlei2" style="font-size:24px" />
            <p>分类</p>
        </router-link>
        <router-link to='/cart'
                     class="navigation"
                     
                     tag="div">
            <i class="iconfont icon-cart-full" 
                      style="font-size:24px" />
            <p>购物车</p>
        </router-link>
        <router-link to='/my'
                     class="navigation"
                     tag="div">
            <i class="iconfont icon-smile"
                      style="font-size:24px"  
                      />
            <p>我的</p>
        </router-link>
    </div>
</template>

<script>

export default {};
</script>

<style lang='less'>
@import '~style/index.less';
.tab-bar {
    width: 100%;
    .h(50);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    background: #F7F9FA;
    .navigation{
        
        text-align: center;
        
    }
    .router-link-active {
        color: #FF734C;
    }
}
</style>