const Language = 'language'
const ifAcceptLandingAgreement = 'ifAcceptLandingAgreement'
const ifAcceptEnterAgreement = 'ifAcceptEnterAgreement'
const initInfo = "initInfo"
const enterForm = "enterForm"

// 当前语言
export function getLanguage() {
  return sessionStorage.getItem(Language)
}
export function setLanguage(lang) {
  return sessionStorage.setItem(Language, lang)
}

// 落地页 是否接受协议
export function getIfAcceptLandingAgreement() {
  return sessionStorage.getItem(ifAcceptLandingAgreement)
}
export function setIfAcceptLandingAgreement(val) {
  return sessionStorage.setItem(ifAcceptLandingAgreement, val)
}

// 快速进入页 是否接受协议
export function getIfAcceptEnterAgreement() {
  return sessionStorage.getItem(ifAcceptEnterAgreement)
}
export function setIfAcceptEnterAgreement(val) {
  return sessionStorage.setItem(ifAcceptEnterAgreement, val)
}

// 保存初始化数据
export function getInitInfo() {
  return JSON.parse(sessionStorage.getItem(initInfo))
}
export function setInitInfo(val) {
  return sessionStorage.setItem(initInfo, JSON.stringify(val))
}

// 保存快速进入页表单数据
export function getEnterForm() {
  return JSON.parse(sessionStorage.getItem(enterForm))
}
export function setEnterForm(val) {
  return sessionStorage.setItem(enterForm, JSON.stringify(val))
}

// 清空 session
export function clearSessionData() {
  sessionStorage.clear()
}