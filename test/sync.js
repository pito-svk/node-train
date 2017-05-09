const test = require('ava')
const train = require('../train')

test('One synchronous function', t => {
  const addTwo = x => x + 2

  const actual = train(5,
                       addTwo) // 7
  const expected = 7

  t.is(actual, expected, 'Resulted value is 7')
})

test('Two synchronous functions', t => {
  const addThree = x => x + 3
  const negative = x => -x

  const actual = train(3,
                       negative, // -3
                       addThree) // 0
  const expected = 0

  t.is(actual, expected, 'Resulted value is 0')
})

test('Array as first argument', t => {
  const double = x => 2 * x
  const even = x => x % 2 === 0

  const everyDouble = arr => arr.map(double)
  const onlyEven = arr => arr.filter(even)

  const actual = train([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        onlyEven, // [2, 4, 6, 8, 10]
                        everyDouble) // [4, 8, 12, 16, 20]

  const expected = [4, 8, 12, 16, 20]

  t.deepEqual(actual, expected, 'Resulted value is array with doubled even numbers')
})
