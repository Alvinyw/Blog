// 填入的值必须为 number
export function isObjEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b)
}
