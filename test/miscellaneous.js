const test = require('ava')
const train = require('../train')

test('Train without any arguments', t => {
  const actual = train()
  const expected = undefined

  t.is(actual, expected, 'Resulted value is undefined')
})

test('Train with undefined', t => {
  const actual = train(undefined)
  const expected = undefined

  t.is(actual, expected, 'Resulted value is undefined')
})

test('Train with null', t => {
  const actual = train(null)
  const expected = null

  t.is(actual, expected, 'Resulted value is null')
})

test('Train with empty array', t => {
  const actual = train([])
  const expected = []

  t.deepEqual(actual, expected, 'Resulted value is empty array')
})
