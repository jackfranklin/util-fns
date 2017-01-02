// @flow
const omit = (obj: Object, excludes: Array<string>): Object => {
  let newObj = {}
  Object.keys(obj).forEach(k => {
    excludes.indexOf(k) === -1 ? newObj[k] = obj[k] : null
  })
  return newObj
}

export default omit

