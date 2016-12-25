// @flow
export const isFunction = (func: any): boolean => typeof func === 'function'

export const omit = (obj: Object, excludes: Array<any>): Object => {
  let newObj = {}
  Object.keys(obj).forEach(k => {
    excludes.indexOf(k) === -1 ? newObj[k] = obj[k] : null
  })
  return newObj
}
