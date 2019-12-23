<template>
   <nav class="procate">

            <div class="procate-item">
                <router-link to="" class="navigation">
                    <img src="https://img02.hua.com/m/home/img/m_home_category_flower.png" alt="鲜花" />
                    <p>鲜花</p>
                </router-link>
            </div>
            <div class="procate-item">
                <router-link to="" class="navigation">
                    <img src="https://img02.hua.com/m/home/img/m_home_category_ppf.png" alt="永生花" />
                    <p>永生花</p>
                </router-link>
            </div>
            <div class="procate-item">
                <router-link to="" class="navigation">
                    <img src="https://img02.hua.com/m/home/img/m_home_category_cake.png" alt="蛋糕" />
                    <p>蛋糕</p>
                </router-link>
            </div>
            <div class="procate-item">
                <router-link to="" class="navigation">
                    <img src="https://img02.hua.com/m/home/img/m_home_category_gift.png" alt="礼品" />
                    <p>礼品</p>
                </router-link>
            </div>
            <div class="procate-item">
                <router-link to="" class="navigation">
                    <img src="https://img02.hua.com/m/home/img/m_home_category_chocolate.png" alt="巧克力" />
                    <p>巧克力</p>
                </router-link>
            </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import "~style/index.less";
.procate {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  background: #fff;
  padding: 0.2rem 0;
}
.procate > .procate-item {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
  font-size:13px;
}
.procate > .procate-item img {
  .w(32);

}
</style>