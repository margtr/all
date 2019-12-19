<template>
  <div class="guess">
    <div class="guess-title">猜你喜欢</div>
                <!-- 商品 -->
    <div class="guess-list">
      <div class="goods_item" v-for="item of arr" :key="item.name">
        <router-link to="">
          <div class="guess-item-img">
            <img v-bind:src="item.image_url" />
          </div>
          <div class="guess-item-detail">
            <div class="guess-item-info">{{ item.name }}</div>
            <div class="guess-item-price">￥{{ item.price }}</div>    
          </div>
        </router-link>
      </div>
    </div>
    <div class="guess-bottom">
     <span>已经到底喽…</span>
    </div>
  </div>
</template>

<script>
import data from "../../public/shuju.json";
export default {
  data() {
    return {
      arr: []
    };
  },
  mounted() {
    this.arr = data.data.recom_list;
    console.log(data);
  }
};
</script>

<style lang="less" scoped>
@import "~style/index.less";
div{
  border: 0;
  margin: 0;
    box-sizing: border-box;
    display: block;
}
.guess {
  margin-top: 0.2rem;
  padding-bottom: 2rem;
  background-color: #fff;
  font-size: 13px;
  color: #232628;
  font-family: SourceHanSansCN, -apple-system, Verdana, Arial, Helvetica, sans-serif;
  -webkit-tap-highlight-color: transparent;
}
.guess-list {
  padding: 0 5px;
}  
.guess-title {
  .h(52);
  font-size: 15.22px;
  color: #232628;
  padding: 0 0.5rem;
  .l_h(52);
}
.goods_item {
  display: inline-block;
  .w(168);
  .h(228);
  margin: 5px 6px 0 6px;
  border-radius: 0.1rem;
  overflow: hidden;
  -webkit-box-shadow: 0px 4px 6px 0px #dee2e5;
  box-shadow: 0px 4px 6px 0px #dee2e5;
  img {
    width: 100%;
    vertical-align: middle;
}
}
section.main .guess-item-detail {
  .h(48);
  padding: 3px 4px;
}
.guess-item-info {
  font-size: 13px;
  color: #232628;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.guess-item-price {
  margin-top:0.3px;
  font-size:14px;
  color: #FF734C;
}
.guess-bottom {
  .h(34);
  margin-top: 0.4rem;
  text-align: center;
  font-size: 12px;
  .l_h(34);
  color: #71797F;
}
</style>