<template>
  <div class="banner swiper-container">
      <van-swipe @change="onChange" :autoplay="3000">
  <van-swipe-item><img src="https://img02.hua.com/slider/19_christmas_banner_m.png"></van-swipe-item>
  <van-swipe-item><img src="https://img02.hua.com/slider/18_birthday_m.jpg?830"></van-swipe-item>
  <van-swipe-item><img src="https://img02.hua.com/slider/19_banner_sheshou_m.jpg"></van-swipe-item>
  <van-swipe-item><img src="https://img02.hua.com/slider/18_youflower_m.jpg?830"></van-swipe-item>
</van-swipe>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);
export default {
methods: {
    onChange(index) {
      //Toast('当前 Swipe 索引：' + index);
    }
  }
}
</script>

<style lang="less" scoped>
@import "~style/index.less";
.banner.swiper-container{
    width:100%;
    .h(172);
    img{
        width: 100%;

    }
    
}

</style>