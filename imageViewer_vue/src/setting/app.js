// 产品管理模块 的全局设置字段
export const appSetting = {

  // 产品类型
  bankCardtypes: [{
      value: 0,
      label: "未知卡类型"
    },
    {
      value: 1,
      label: "储蓄卡"
    },
    {
      value: 2,
      label: "贷记卡"
    }
  ]

}

// 产品管理模块 的全局方法
export const appFun = {
  // 获取银行的基本信息，val 为银行名称或是银行code
  getBankBasicInfo: function (val) {
    if (!val) return ""
    const _res = appSetting.bankInfoList.find((value, index, arr) => {
      return value.name.indexOf(val) !== -1 || value.code.indexOf(val) !== -1;
    });
    return _res ? _res : {};
  }
}