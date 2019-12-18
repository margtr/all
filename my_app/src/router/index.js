import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from '../pages/Cart/'
import Indexs from '../pages/Indexs/'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/1'
  },
  {
    path: '/1',
    name: 'indexs',
    component: Indexs
  },
]

const router = new VueRouter({
  mode:'hash',
  base:process.env.BASE_URL,
  routes
})

export default router
