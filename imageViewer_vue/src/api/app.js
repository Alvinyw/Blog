import request from '@/utils/request'

/**
 * 给注册用户手机号发送验证码
 * @param { phone } 手机号
 * @param { type } 验证码类型 1，找回密码
}**/
export function sendSMSCode(data) {
  return request({
    url: '/open/free/mobile/code',
    method: 'get',
    params: {
      ...data
    },
  })
}

/**
 * 给注册用户手机号发送验证码
 * @param { code } 验证码
 * @param { reqNo } 验证码流水号
}**/
export function checkSMSCode(data) {
  return request({
    url: '/open/free/check/mobile/code',
    method: 'post',
    data,
  })
}