<template>
    <div class="panel">
            <div class="panel-body">
                <div class="linkbox">
                    <div class="linkbox-item">
                        <a href="https://m.hua.com/chat/" class="navigation">
                           <van-icon name="service-o" class="add"/>
                            <p class="linkbox-item-txt">联系客服</p>
                         </a>
                    </div>
                    <div class="linkbox-item">
                        <router-link to="" class="navigation">
                            <van-icon name="question-o" class="add"/>
                            <p class="linkbox-item-txt">帮助中心</p>
                         </router-link>
                    </div>
                    <div class="linkbox-item">
                        <router-link to="" class="navigation">
                            <van-icon name="info-o" class="add"/>
                            <p class="linkbox-item-txt">关于花礼</p>
                        </router-link>
                    </div>
                    <div class="linkbox-item">
                        <router-link to="" class="navigation">
                            <van-icon name="setting-o" class="add"/>
                            <p class="linkbox-item-txt">设置</p>
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
    .h(90);
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
.linkbox-item > .navigation {
    width: 100%;
    padding: 0.5rem 0;
    display: block;
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: transparent;
    outline: none;
}
.navigation> .add{
    font-size: 20px;
}
</style>