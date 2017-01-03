// @flow
function sortBy<T> (list: Array<T>, selector: (obj: T) => any): Array<T> {
  return list.sort((a, b) => {
    return selector(a) - selector(b)
  })
}

export default sortBy

