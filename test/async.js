const test = require('ava')
const train = require('../train')

test('One asynchronous function', async t => {
  const double = x => 2 * x
  const doubleAfter50ms = x => new Promise(resolve => setTimeout(() => resolve(double(x)), 50))

  const actual = await train(5,
                             doubleAfter50ms) // 10
  const expected = 10

  t.is(actual, expected, 'Resulted value is 10')
})

test('Array asynchronous operations', async t => {
  const triple = x => 3 * x
  const tripleAfter50ms = x => new Promise(resolve => setTimeout(() => resolve(triple(x)), 50))
  const tripleAfter50msPromises = arr => arr.map(tripleAfter50ms)

  const sort = arr => arr.sort()
  const asyncSort = arr => new Promise(resolve => setTimeout(() => resolve(sort(arr)), 50))

  const everyTriple = arr => Promise.all(tripleAfter50msPromises(arr))

  const actual = await train([9, 4, 5, 6, 7],
                              asyncSort, // [4, 5, 6, 7, 9]
                              everyTriple) // [12, 15, 18, 21, 27]
  const expected = [12, 15, 18, 21, 27]

  t.deepEqual(actual, expected, 'Resulted value is sorted array with tripled numbers')
})
