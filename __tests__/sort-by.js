// @flow
import sortBy from '../src/sort-by'

test('it sorts by whatever is returned from the func', () => {
  const list = [{ id: 1 }, { id: 3 }, { id: 2 }]
  expect(sortBy(list, item => item.id)).toEqual([
    { id: 1 }, { id: 2 }, { id: 3 },
  ])
})

