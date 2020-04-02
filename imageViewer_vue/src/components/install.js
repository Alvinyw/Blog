// 组件全局注册
import Vue from 'vue'

// 注册全局组件
import VanLoading from './VanLoading'

const Components = [VanLoading]

Components.map(com => {
  Vue.component(com.name, com)
})


// 祖册全局方法
import Loading from './Loading/loading'

const globalMethods = [Loading]

globalMethods.map(method => {
  Vue.use(method)
})

export default Vue