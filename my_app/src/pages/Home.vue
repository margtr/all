<template>
<div>
  <div class="home">
    <topbanner></topbanner>
    <banner></banner>
    <conpany></conpany>
    <procate></procate>
    <festival></festival>
    <scene></scene>
    <product></product>
    <products ></products>
    <web></web>
</div>
<TabBar ></TabBar>
  </div>
</template>

<script>
import TabBar from "../views/TabBar.vue";
import topbanner from '../Home/topbanner.vue'
import banner from '../Home/banner.vue'
import conpany from '../Home/conpany_info.vue'
import procate from '../Home/procate.vue'
import festival from '../Home/festival.vue'
import scene from '../Home/scene.vue'
import product from '../Home/product.vue'
import products from '../Home/products.vue'
import web from '../Home/web.vue'

export default {
 
  components: {
    topbanner, 
    banner,
    conpany,
    procate,
    festival,
    scene,
    product,
    products ,
    web,
     TabBar
  }
}
</script>
