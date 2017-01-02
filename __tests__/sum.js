// @flow
import sum from '../src/sum'

test('it sums items in an array', () => {
  expect(sum([1, 2, 3])).toEqual(6)
})

