// 组件全局注册
import Vue from 'vue'

import VanLoading from './VanLoading'

// 组件库
const Components = [VanLoading]

// 注册全局组件
Components.map(com => {
  Vue.component(com.name, com)
})

export default Vue