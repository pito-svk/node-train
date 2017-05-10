const test = require('ava')
const train = require('../train')

test('One asynchronous function', async t => {
  const double = x => 2 * x
  const doubleAfter50ms = async x => new Promise(resolve => setTimeout(() => resolve(double(x)), 50))

  const actual = await train(5,
                       doubleAfter50ms) // 10

  const expected = 10

  t.is(actual, expected, 'Resulted value is 10')
})
