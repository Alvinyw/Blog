const Language = 'language'
const ifAcceptLandingAgreement = 'ifAcceptLandingAgreement'
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