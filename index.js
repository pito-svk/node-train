const R = require('ramda')
const Promise = require('bluebird')

function thread (initialValue, ...list) {
  return R.flatten(list)
    .reduce((acc, fn) => acc.then(fn), Promise.resolve(initialValue))
}

module.exports = thread
