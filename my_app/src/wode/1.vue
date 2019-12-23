<template>
    <div class="panel">
            <div class="panel-head">
                <div class="panel-head-title">我的订单</div>
                <div class="panel-head-right">
                    <router-link to="/Passport/Login">全部订单<van-icon name="arrow" /> </router-link>
                </div>
            </div>
            <div class="panel-body">
                <div class="order">
                    <div class="order-item">
                        <router-link to="/Passport/Login"  class="navigation">
                            <img class="order-item-icon" src="https://img02.hua.com/m/member/center/myinfo_pendingpay.png" />
                            <p class="order-item-reddot" id="dfk"></p>
                            <p class="order-item-txt">待付款</p>
                         </router-link>
                    </div>
                    <div class="order-item">
                        <router-link to="/Passport/Login"  class="navigation">
                            <img class="order-item-icon" src="https://img02.hua.com/m/member/center/myinfo_distribution.png" />
                            <p class="order-item-reddot" id="jrps"></p>
                            <p>今日配送</p>
                         </router-link>
                    </div>
                    <div class="order-item">
                        <router-link to="/Passport/Login"  class="navigation">
                            <img class="order-item-icon" src="https://img02.hua.com/m/member/center/myinfo_evaluation.png" />
                            <p class="order-item-reddot" id="dpj"></p>
                            <p>待评价</p>
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
.main .panel {
    background: #fff;
    border-radius:0.28571429rem;
    .h(110);
    margin: 0 0.2rem;
    border-radius: 0.2rem;
    -webkit-box-shadow: 0 0.28571429rem 0.42857143rem 0 #DEE2E5;
    box-shadow: 0 0.1rem 0.2rem 0 #DEE2E5;
}
// .panel + .panel {
//   margin-top: 0.2rem;
// }
.panel-head {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #E9ECF0;
  width: 100%;
  font-size: 15px;
  .h(40);
  .l_h(40);
  position: relative;
  .panel-head-title{
      .padding(0,0,0,20);
  }
}
.panel-head-right{
    .padding(0,20,0,0)
}
.order {
    display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
    text-align: center;
    margin-top: 12px;
    
    
}
.order-item {
    flex: 1;
}
.order-item-icon {
    .w(29);
    .h(29);
}
</style>