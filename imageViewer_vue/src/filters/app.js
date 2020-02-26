import {
  appSetting
} from '../setting/app'

// 产品管理模块 的全局方法
const appFilters = {

  // 获取产品类型描述
  filterBankCardType: function (val) {
    if (!val) return ''
    const _res = appSetting.bankCardtypes.find((value) => {
      return value['value'] === Number(val)
    });
    return _res['label'] || ''
  },

}

export default appFilters