<template>
     <div class="panel">
            <div class="panel-body">
                <div class="linkbox">
                    <div class="linkbox-item">
                        <router-link to="" class="navigation">
                           <van-icon name="balance-list-o" class="add"/>
                            <p class="linkbox-item-txt">优惠券</p>
                      </router-link>
                    </div>
                    <div class="linkbox-item">
                        <router-link to="" class="navigation">
                            <van-icon name="vip-card-o" class="add" />
                            <p class="linkbox-item-txt">权益卡</p>
                        </router-link>
                    </div>
                    <div class="linkbox-item">
                        <router-link to="" class="navigation">
                            <van-icon name="after-sale" class="add"/>
                            <p class="linkbox-item-txt">余额</p>
                        </router-link>
                    </div>
                    <div class="linkbox-item">
                        <router-link to="" class="navigation">
                           <van-icon name="diamond-o" class="add" />
                            <p class="linkbox-item-txt">会员积分</p>
                        </router-link>
                    </div>
                </div>
                <div class="linkbox">
                    <div class="linkbox-item">
                        <router-link to="" class="navigation">
                            <van-icon name="logistics" class="add"/>
                            <p class="linkbox-item-txt">收货地址</p>
                        </router-link>
                    </div>
                    <div class="linkbox-item">
                        <router-link to="/Passport/Login" class="navigation">
                           <van-icon name="point-gift-o" class="add"/>
                            <p class="linkbox-item-txt">生日纪念提醒</p>
                        </router-link>
                    </div>
                    <div class="linkbox-item">
                        <router-link to="/Passport/Login" class="navigation">
                            <van-icon name="star-o" class="add" />
                            <p class="linkbox-item-txt">我的收藏</p>
                        </router-link>
                    </div>
                    <div class="linkbox-item">
                        <router-link to="/Passport/Login" class="navigation">
                            <van-icon name="underway-o" class="add" />
                            <p class="linkbox-item-txt">浏览记录</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
@import '~style/index.less';
.panel + .panel {
    margin-top: 0.2rem;
}
.panel {
    background: #fff;
    border-radius:0.28571429rem;
    .h(168);
    margin: 0 0.2rem;
    border-radius: 0.2rem;
    -webkit-box-shadow: 0 0.28571429rem 0.42857143rem 0 #DEE2E5;
    box-shadow: 0 0.1rem 0.2rem 0 #DEE2E5;
}
div{
    border: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    display: block;
        font-size: 13px;
}
.linkbox-item {
    float: left;
    width: 25%;
    .h(83);
    text-align: center;
    border-top: 1px solid #E9ECF0
    

}
.navigation> .add{
    font-size: 18px;
}
.linkbox-item > .navigation {
    width: 100%;
    padding: 0.5rem 0;
    display: block;
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: transparent;
    outline: none;
}

</style>