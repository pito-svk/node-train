const test = require('ava')
const train = require('../train')

test('One synchronous function', t => {
  const addTwo = x => x + 2

  const actual = train(5,
                       addTwo)
  const expected = 7

  t.is(actual, expected, 'Resulted value is 7')
})

test('Two synchronous functions', t => {
  const addThree = x => x + 3
  const negative = x => -x

  const actual = train(3,
                       negative,
                       addThree)
  const expected = 0

  t.is(actual, expected, 'Resulted value is 10')
})
