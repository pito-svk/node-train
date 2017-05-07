const R = require('ramda')
const Promise = require('bluebird')

function thread (acc, ...list) {
  return R.flatten(list)
    .reduce((acc, fn) => Promise.resolve(fn(acc)), Promise.resolve(acc))
}

module.exports = thread
