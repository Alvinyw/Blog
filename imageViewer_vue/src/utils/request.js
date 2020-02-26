import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASEURL, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 60000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    // const devConfigInfo = {}
    // const merchantInfo = {}

    // const secret = devConfigInfo.secret ? devConfigInfo.secret : ""
    // const merchantCode = merchantInfo.merchantId ? merchantInfo.merchantId : ""
    // const childMerchantCode = merchantInfo.childMerchantId ? merchantInfo.childMerchantId : ""
    // const productCode = store.getters.productCode
    // const _time = new Date().getTime()

    // config.headers['code'] = merchantCode
    // config.headers['childMerchantCode'] = childMerchantCode
    // config.headers['time'] = _time
    // config.headers['sign'] = md5(merchantCode + secret + _time).toString()
    // config.headers['requestNo'] = merchantCode + productCode + getYYMMDD().toString() + getUUID().toString()
    // config.headers['version'] = '1.0.0'
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // if (res.code !== "200000") {
    // if the custom code is not 20000, it is judged as an error.
    // Message({
    //   message: res.message || 'Error',
    //   type: 'error',
    //   duration: 5 * 1000
    // })

    // // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //   // to re-login
    //   MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
    //     confirmButtonText: 'Re-Login',
    //     cancelButtonText: 'Cancel',
    //     type: 'warning'
    //   }).then(() => {
    //   })
    // }
    //   return Promise.reject(new Error(res.message || 'Error'))
    // } else {
    //   return res
    // }
    return res
  },
  error => {
    // const status = error.response.status

    // if (status === 999) {
    //   // 如果 token 过期
    //   store.dispatch('user/removeSession').then(() => {
    //     Message.warning("登录信息已过期，请重新登录！")
    //     cookies.removeCurrentMenuIndex();
    //     router.push({
    //       path: "/login"
    //     });
    //   })
    // }
    return Promise.reject(error)
  }
)

export default service