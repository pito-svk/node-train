const test = require('ava')
const train = require('../train')

test('First function is synchronous other async', async t => {
  const last = arr => arr.slice(-1)
  const double = x => 2 * x
  const doubleAfter50ms = x => new Promise(resolve => setTimeout(() => resolve(double(x)), 50))

  const actual = await train([1, 2, 3],
                              last, // 3
                              doubleAfter50ms) // 6
  const expected = 6

  t.is(actual, expected, 'Resulted value is 6')
})
