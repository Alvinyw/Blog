import Vue from 'vue'
import {
  appSetting,
  appFun
} from './app'

Vue.prototype.$settings = {
  app: appSetting
}

Vue.prototype.$app = appFun