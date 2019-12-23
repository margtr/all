<template>
   <section class="festival">
            <div class="festival-banner">
                <router-link to="" class="navigation"><img src="https://img02.hua.com/slider/19_christmas_mbanner.gif" alt="xmas" /></router-link>
            </div>
            <div class="festival-product" style=background:#339E8A;>
            <div class="festival-list">
                    <!--水平模块2个一组-->
                                <div class="festival-item festival-item-horizontal">
                                    <router-link to="" class="navigation" style="background-image: url('https://img02.hua.com/zhuanti/xmas/2019/1073186.jpg');">
                                        <p class="festival-item-name">唯美永生花</p>
                                        <p class="festival-item-desc">女友最爱</p>
                                        <p class="festival-item-price" >￥588</p>
                                    </router-link>
                                </div>
                                <div class="festival-item festival-item-horizontal">
                                    <router-link to="" class="navigation" style="background-image: url('https://img02.hua.com/zhuanti/xmas/2019/1087022.jpg');">
                                        <p class="festival-item-name">暖冬佳礼</p>
                                        <p class="festival-item-desc">送爱也送温暖</p>
                                        <p class="festival-item-price" >￥228</p>
                                    </router-link>
                                </div>
                                <div class="festival-item festival-item-horizontal">
                                    <router-link to="" class="navigation" style="background-image: url('https://img02.hua.com/zhuanti/xmas/2019/9012450.jpg');">
                                        <p class="festival-item-name">圣诞新品</p>
                                        <p class="festival-item-desc">新品新花艺</p>
                                        <p class="festival-item-price" >￥198</p>
                                    </router-link>
                                </div>
                                <div class="festival-item festival-item-horizontal">
                                    <router-link to="" class="navigation" style="background-image: url('https://img02.hua.com/zhuanti/xmas/2019/9012374.jpg');">
                                        <p class="festival-item-name">甜蜜圣诞夜</p>
                                        <p class="festival-item-desc">送花也送平安</p>
                                        <p class="festival-item-price">￥295</p>
                                    </router-link>
                                </div>
                </div>
            </div>
        </section>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import "~style/index.less";
@import "~style/index.css";
.festival {
  background: #fff;
}
.festival-list {
  padding: 12px 0.2rem;
}
.navigation img{
    width: 100%;
    .h(118);
}
.festival {
  background: #fff;
}
.festival-list {
  padding: 12px 0.2rem;
}
.festival-list:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.festival-item {
  float: left;
  width: 50%;
  padding: 0 2px;
}
.festival-item:nth-child(2) ~ .festival-item {
  margin-top: 0.1rem;
}
.festival-item > .navigation {
  background: #fff;
  border-radius: 0.1rem;
}
.festival-item-name,
.festival-item-desc,
.festival-item-price {
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.festival-item .festival-item-name {
  font-weight: 400;
  padding-top: 0.2rem;
}
.festival-item .festival-item-desc {
  font-weight: 300;
  font-size: 0.35rem;
  color: #71797F;
}
.festival-item .festival-item-pic {
  padding-top: 0.2rem;
}
.festival-item .festival-item-price {
  font-weight: 500;
  padding-top: 0.2rem;
  color: #FF734C;
}
.festival-item.festival-item-horizontal > .navigation {
  padding: 0 0.35rem;
  height: 2.1rem;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top right;
}
.festival-item.festival-item-vertical {
  width: 33.33333333%;
}
.festival-item.festival-item-vertical > .navigation {
  padding: 0 0.2rem;
  background-image: none !important;
  text-align: center;
}
.festival-item.festival-item-vertical .festival-item-price {
  padding: 8px 0 0.6rem;
}

</style>