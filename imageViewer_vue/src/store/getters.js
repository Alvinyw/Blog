const getters = {
  // token: state => state.user.userData.token,
  // avatar: state => state.user.userData.avatar ? state.user.userData.avatar : 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  // name: state => state.user.userData.name,
  // userId: state => state.user.userData.id,
  // account: state => state.user.userData.account,
  // phone: state => state.user.userData.phone,
  // firstLogin: state => state.user.userData.firstLogin,

  // oriRoutes: state => state.resource.oriRoutes,
  // routes: state => state.resource.routes,
  // buttons: state => state.resource.buttons
  merchantId: state => state.app.merchantId
}
export default getters