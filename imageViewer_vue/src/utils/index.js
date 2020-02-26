import Vue from 'vue'
import * as session from './session'
import * as cookies from './cookies'
import * as lib from './lib' // 全局工具方法

Vue.prototype.$session = session // session 操作全局方法
Vue.prototype.$cookies = cookies // cookie 操作全局方法
Vue.prototype.$lib = lib