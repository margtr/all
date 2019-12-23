<template>
  <section class="product">
            <h3 class="product-title">永生花推荐</h3>
            <div class="product-list product-list-vertical" v-for="item of arr" :key="item.path" >

                    <div class="product-item product-item-vertical" >
                        <a href="/product/1073033.html?huaPid=homepage-f301" class="navigation">
                            <div class="product-item-pic"><img  v-bind:src="item.image_url"/></div>
                            <div class="product-item-info">
                                    <div class="product-item-info-tags">
                                            <span>{{item.product_promo}}</span>
                                    </div>
                                <!--Dev:: text-overflow Or text-overflow-line2-->
                                <p class="product-item-info-name  text-overflow ">{{item.product_desc}}</p>
                                <div class="product-item-info-bottom">
                                    <div class="product-item-info-bottom-left">
                                        <p class="product-item-info-prices" data-id="1073033"><strong>¥{{item.price}}</strong><s>¥{{item.market_price}}</s></p>
                                        <p class="product-item-info-sales">{{item.product_tag}}</p>
                                    </div>
                                    <div class="product-item-info-bottom-right" data-id="1073033"><i class="iconfont icon-cart-full"></i></div>
                                </div>
                            </div>
                        </a>
                    </div>
            </div>
            <div class="clear"></div>
                    <div class="product-mores">
                <router-link to="" class="product-more-btn">查看更多</router-link>
            </div>                                                                                       
        </section>
</template>

<script>
import data from "../../public/tuijian.json";
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
}
</script>

<style lang="less" scoped>
@import "~style/index.less";
@import "~style/index.css";
.product {
  margin-top: 0.2rem;
  background: #ffffff;
 
 padding-bottom: 0.6rem;
}
.product-title {
  font-size: 16px;
  padding: 0.6rem 0;
  text-align: center;
  font-weight: normal;
 
}
.product-list {
  padding: 0 0.3rem 0.2rem;
}
.product-list.product-list-vertical {
  padding: 0 0.2rem 1rem;
}
 
.product-list.product-list-vertical {
    padding: 0 0.28571429rem ;
   
    .product-item.product-item-vertical {
    float: left;
    width: 50%;
    padding: 0 0.2rem;
    margin-bottom: 0.3rem;
}
.product-list::after {
  content: "";
  display: block;
  height: 0;
  clear: both;
 }
}
.product-item > .navigation {
  overflow: hidden;
  -webkit-box-shadow: 0 0.2rem 0.4rem 0 #e9ecf0;
  box-shadow: 0 0.28571429rem 0.4rem 0 #e9ecf0;
  border-radius: 0.28571429rem;
}
.product-item-info-name {
  font-weight: 300;
}
.product-item-info-desc {
  font-size: 0.35rem;
  font-weight: 300;
}
.product-item-info-tags {
  font-size: 0;
}
.product-item-info-tags:empty {
  display: none;
}
.product-item-info-tags > span {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  border-radius: 10rem;
  border: 1px solid #FF734C;
  color: #FF734C;
  font-size: 0.3rem;
  padding: 0 0.28571429rem;
}
.product-item-info-tags > span + span {
  margin-left: 0.2rem;
}
.product-item-info-bottom {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.product-item-info-bottom-left {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.product-item-info-bottom-right {
  text-align: right;
}
.product-item-info-bottom .iconfont-buy {
  font-size: 1.42857143rem;
}
.product-item-info-prices > strong {
  font-size: 0.35rem;
  color: #FF734C;
  font-weight: 500;
}
.product-item-info-prices > s {
  font-size: 0.3rem;
  color: #71797F;
  margin-left: 0.42857143rem;
}
.product-item-info-sales {
  font-size: 0.3rem;
  color: #71797F;
}
.product-item.product-item-horizontal + .product-item.product-item-horizontal {
  margin-top: 0.4rem;
}
.product-item.product-item-horizontal > .navigation {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.product-item.product-item-horizontal .product-item-pic {
  .w(100);
  min-width: 5.2rem;
  max-width: 5rem;
  img{
    width: 90%;
}
}
.product-item.product-item-horizontal .product-item-info {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  max-width: 6rem;
  padding: 0 -0.2rem;
  position: relative;
}
.product-item.product-item-horizontal .product-item-info-name {
  padding-top: 0.5rem;
}
.product-item.product-item-horizontal .product-item-info-tags {
  margin-top: 0.5rem;
}
.product-item.product-item-horizontal .product-item-info-promo {
  margin-top: 0.4rem;
  padding: 0.3rem 0;
  border-top: 1px solid #E9ECF0;
  border-bottom: 1px solid #E9ECF0;
  font-size: 0.3rem;
  font-weight: 500;
}
.product-item.product-item-horizontal .product-item-info-bottom {
  position: absolute;
  left: 0.1rem;
  right: 1rem;
  bottom: 0.3rem;
  z-index: 1;
}
.product-item.product-item-vertical {
  float: left;
  width: 50%;
  padding: 0 0.4rem;
  margin-bottom: 0.2rem;
}
.product-item.product-item-vertical .product-item-pic {
  max-height: 10rem;
  overflow: hidden;
}
.product-item.product-item-vertical .product-item-info {
  padding: 0.2rem 0.2rem 1rem;
  height: 3rem;
  overflow: hidden;
  position: relative;
}
.product-item.product-item-vertical .product-item-info-tags {
  margin-bottom: 0.3rem;
}
.product-item.product-item-vertical .product-item-info-bottom {
  padding-bottom: 20px;
}
.product-more{
    padding-top: 20px;
}
.product-more-btn {
  display: block;
  margin: 0 auto;
  font-size: 0.3rem;
  border: 1px solid #232628;
  .w(89);
  .h(24);
  .l_h(24);
  text-align: center;
  border-radius: 0.1rem;
  margin-top: 10px;
} 
.clear{
  clear: both;
}

</style>