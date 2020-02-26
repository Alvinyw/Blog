import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'
import i18n from './lang' // 引入多语言配置文件

import './api' // 接口文件
import './utils' // 工具库
import './components/install' // 自定义全局组件
import './setting' // 全局设置文件
import './directive' // 自定义全局指令
import './filters' // 自定义全局过滤器
import '@/styles/index.scss' // 全局样式文件
import './mock'
import './permission'

// 引入 SVG 动画
import lottie from 'vue-lottie';
Vue.component('lottie', lottie)

// 引入全局 loading 组件
import Loading from './components/Loading/loading'
Vue.use(Loading)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})