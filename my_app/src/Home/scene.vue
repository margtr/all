<template>
   <section class="scene">
        <div class="modetitle">一秒选花</div>

            <div class="scene-list">
                    <div class="scene-item scene-item-radius">
                        <router-link to="" class="navigation">
                            <img src="https://img02.hua.com/m/home/img/m_home_use_lover.png" alt="送恋人" />
                            <span class="scene-item-use-title">送恋人</span>
                        </router-link>
                    </div>
                    <div class="scene-item scene-item-radius">
                        <router-link to="" class="navigation">
                            <img src="https://img02.hua.com/m/home/img/m_home_use_elder.png" alt="送长辈" />
                            <span class="scene-item-use-title">送长辈</span>
                        </router-link>
                    </div>
                    <div class="scene-item scene-item-radius">
                        <router-link to=""   class="navigation">
                            <img src="https://img02.hua.com/m/home/img/m_home_use_friends.png" alt="送朋友" />
                            <span class="scene-item-use-title">送朋友</span>
                        </router-link>
                    </div>
            </div>
        
            <div class="scene-list">
                    <div class="scene-item scene-item-radius">
                        <a href="/shengrixianhua/" class="navigation">
                            <img src="https://img02.hua.com/m/home/img/m_home_use_birthday2.png" alt="生日祝福" />
                            <span class="scene-item-title">生日祝福</span>
                        </a>
                    </div>
                    <div class="scene-item scene-item-radius">
                        <a href="/biaobaiqiuhunxianhua/" class="navigation">
                            <img src="https://img02.hua.com/m/home/img/m_home_use_profess2.png" alt="表白求婚" />
                            <span class="scene-item-title">表白求婚</span>
                        </a>
                    </div>
                    <div class="scene-item scene-item-radius">
                        <a href="/businessFlower/" class="navigation">
                            <img src="https://img02.hua.com/m/home/img/m_home_use_business2.png" alt="开业商务" />
                            <span class="scene-item-title">开业商务</span>
                        </a>
                    </div>
                    <div class="scene-item scene-item-radius">
                        <a href="zhounianjinianxianhua" class="navigation">
                            <img src="https://img02.hua.com/m/home/img/m_home_use_anniversary2.png" alt="周年纪念" />
                            <span class="scene-item-title">周年纪念</span>
                        </a>
                    </div>
            </div>
        <!--mode-2-->

            <div class="scene-list">

                        <a href="/ranking/" class="scene-item scene-item-bg" style="background-image: url(https://img02.hua.com/m/home/img/m_home_ranklist2.png);">
                            <p class="scene-item-name">热销榜</p>
                            <p class="scene-item-desc">集万千宠爱</p>
                            <div class="scene-item-bottom">
                                <span class="scene-item-bottom-label">大家都在买</span>
                                <span class="scene-item-bottom-text">热销11.2万束</span>
                            </div>
                        </a>
                        <a href="/theme/tejiazhuanqu/" class="scene-item scene-item-bg" style="background-image: url(https://img02.hua.com/m/home/img/m_home_special2.png);">
                            <p class="scene-item-name">特价专区</p>
                            <p class="scene-item-desc">超值好货</p>
                            <div class="scene-item-bottom">
                                <span class="scene-item-bottom-label">限时直降</span>
                                <span class="scene-item-bottom-text" data-id="9012038">¥159 <s>¥186</s></span>
                            </div>
                        </a>
            </div>
        <!--mode-3-->

            <div class="scene-list">
                    <div class="scene-item">
                        <a href="https://m.hua.com/theme/xinpinlaixi/" class="navigation">
                            <img src="https://img02.hua.com/m/home/img/m_home_category_new2.png" alt="新品来袭" />
                            <span class="scene-item-pange">新品来袭</span>
                        </a>
                    </div>
                    <div class="scene-item">
                        <a href="https://m.hua.com/theme/pinweizhixuan/" class="navigation">
                            <img src="https://img02.hua.com/m/home/img/m_home_category_quality2.png" alt="品味之选" />
                            <span class="scene-item-pange">品味之选</span>
                        </a>
                    </div>
                    <div class="scene-item">
                        <a href="https://m.hua.com/you/" class="navigation">
                            <img src="https://img02.hua.com/m/home/img/m_home_category_you2.png" alt="设计师臻选" />
                            <span class="scene-item-pange">设计师臻选</span>
                        </a>
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
.scene {
  background: #fff;
  padding-bottom: 2rem;
}
.scene > .scene-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 0 6px;
}
.scene > .scene-list + .scene-list {
  margin-top: 0.2rem;
}
.scene-item {
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
  margin: 0 0.14285714rem;
  overflow: hidden;
}
.scene-item.scene-item-radius {
  border-radius: 0.28571429rem;
}
.scene-item.scene-item-bg {
  margin: 0;
  .h(140);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  padding: 0.4rem;
  border: 1px solid #E9ECF0;
}
.scene-item.scene-item-bg:nth-child(2n) {
  border-left: 0;
}
.scene-item-use-title {
  position: absolute;
  bottom: 0.1rem;
  left: 0;
  right: 0;
  z-index: 1;
  color: #fff;
  text-align: center;
}
.scene-item-title {
  position: absolute;
  top: 0.2rem;
  left: 0;
  right: 0;
  z-index: 1;
  text-align: center;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.scene-item-desc {
  font-size: 0.3rem;
  color: #71797F;
}
.scene-item-pange {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(35, 38, 40, 0.8);
  color: #fff;
  text-align: center;
  font-size: 0.3rem;
  padding: 0.1rem 0;
}
.scene-item-bottom {
  position: absolute;
  bottom: 0.2rem;
  left: 0.2rem;
  z-index: 1;
  font-size: 0.2rem;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.scene-item-bottom-label {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-radius: 2rem;
  background: #FF734C;
  padding: 0.2rem 0.5rem;
  color: #fff;
  margin-right: 1rem;
}
.scene-item-bottom-text > s {
  color: #B4BABF;
}
</style>