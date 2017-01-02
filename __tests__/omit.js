// @flow
import omit from '../src/omit'

test('it omits items from objects', () => {
  expect(omit({ a: 1 }, ['a'])).toEqual({})
})

