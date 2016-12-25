// @flow
import { omit } from '../index'

test('it omits items from objects', () => {
  expect(omit({ a: 1 }, ['a'])).toEqual({})
})

