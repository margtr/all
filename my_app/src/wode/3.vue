<template>
   <div class="panel panel-wxguanjia">
            <div class="panel-body">
                <div class="wxguanjia">
                    <div class="wxguanjia-head">
                        <div class="wxguanjia-head-left">
                            <img src="http://img02.hua.com/m/images/wxguanjia-kf.png" alt="" />
                            <span>专属秘书|喜棠</span>
                        </div>
                        <div class="wxguanjia-head-right">
                           <van-button type="primary" size="small" class="add1">加我微信</van-button>
                        </div>
                    </div>
                    <div class="wxguanjia-cont">Hi，我是您的专属秘书喜棠，添加我微信<span class="wxguanjia-id">huacom01</span>，我将帮您催单，有需求时，1对1帮您走绿色通道。</div>
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
    .h(110);
    margin: 0 0.2rem;
    border-radius: 0.2rem;
    -webkit-box-shadow: 0 0.28571429rem 0.42857143rem 0 #DEE2E5;
    box-shadow: 0 0.1rem 0.2rem 0 #DEE2E5;
}
.wxguanjia {
    padding: 0.3rem 0 0.1rem;
    
}
div{
    border: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    display: block;
        font-size: 13px;
}
.wxguanjia-head {
    .w(320);
    
    margin: 0 auto;
}
.wxguanjia-head-left {
    display: inline-block;
    width: 60%;
    vertical-align: top;
}
.wxguanjia-head-left img {
    .w(29);
    .h(29);
    border-radius: 50%;
    overflow: hidden;
    vertical-align: top;
}
.wxguanjia-head-left span {
    font-size: 13px;
    .l_h(30);
    margin-left: 0.3rem;
    color: #282323;
    vertical-align: top;
}
.wxguanjia-head-right {
    display: inline-block;
    width: 40%;
    vertical-align: top;
    text-align: right;
}
.add1{
    .w(128);
    background: rgba(255, 0, 0, 0.726);
    border: none;
}
.wxguanjia-cont {
    .w(329);
    .h(62);
    margin: 0 auto;
    padding-top: 10px;
    padding-left: 14px;
    font-size: 11px;
    padding-right: 10px;
    
    color: #232628;
    background-image: url(https://img02.hua.com/m/images/wxguanjia_wode_bg.png);
    background-position: top center;
    background-size: contain;
    background-repeat: no-repeat;
    line-height: 1.7;
}
.panel panel-wxguanjia{
    .h(103)
}

</style>