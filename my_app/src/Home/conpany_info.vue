<template>
  <div>
      <div class="conpany-info">
          <div class="conpany-info-item" v-for="k in item" :key="k.id">
              <i :class='k.icon'></i>
              <span>{{k.name}}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            item : [
                {
                    id: 1,
                    name: '认证龙头企业',
                    icon: 'iconfont icon-1'
                },{
                    id: 2,
                    name: '14年品牌',
                    icon: 'iconfont icon-1'
                },{
                    id: 3,
                    name: '3小时送花',
                     icon: 'iconfont icon-1'
                },{
                    id: 4,
                    name: '最近345100条好评',
                     icon: 'iconfont icon-1'
                },
            ]
        }
    }
}
</script>

<style lang="less" scoped>
@import "~style/index.less";
.conpany-info{
    .h(33);
    .padding(10, 0, 0, 7);
    display: flex;
    align-items: center;
    background:#fff;
    .l_h(33);
    i{
        font-size: 13px;
        color: inherit;
    -webkit-tap-highlight-color: transparent;
    }
    .conpany-info-item{
        .padding(0,4,0,0);
        span{
            .margin(0,0,0,5);
             font-size: 11px;
             color: inherit;
         -webkit-tap-highlight-color: transparent;
        }
    }
    
}
</style>