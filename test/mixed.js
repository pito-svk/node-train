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

test('Synchronous function is in the middle', async t => {
  const removeAttr = attr => obj => {
    delete obj[attr]
    return obj
  }
  const addAttr = (attr, value) => obj => {
    obj[attr] = value
    return obj
  }
  const getKey = key => obj => obj[key]

  const addAttrAfter50ms = (attr, value) => obj => new Promise(resolve => setTimeout(() => resolve(addAttr(attr, value)(obj)), 50))
  const getKeyAfter50ms = key => obj => new Promise(resolve => setTimeout(() => resolve(getKey(key)(obj)), 50))

  const actual = await train({ x: [1, 2, 3], y: 'foo' },
                             addAttrAfter50ms('z', 4), // { x: [1, 2, 3], y: 'foo', z: 4 }
                             removeAttr('x'), // { y: 'foo', z: 4 }
                             getKeyAfter50ms('z')) // 4
  const expected = 4

  t.is(actual, expected, 'Resulted value is 4')
})

test('Synchronous function at the end', async t => {
  const double = x => 2 * x
  const triple = x => 3 * x
  const subtractFour = x => x - 4

  const doubleAfter50ms = x => new Promise(resolve => setTimeout(() => resolve(double(x)), 50))
  const tripleAfter50ms = x => new Promise(resolve => setTimeout(() => resolve(triple(x)), 50))

  const actual = await train(9,
                             doubleAfter50ms, // 18
                             tripleAfter50ms, // 54
                             subtractFour) // 50
  const expected = 50

  t.is(actual, expected, 'Resulted value is 50')
})
