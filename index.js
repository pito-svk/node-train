const R = require('ramda')
const Promise = require('bluebird')

function train (initialValue, ...list) {
  return R.flatten(list)
    .reduce((acc, fn) => acc.then(fn), Promise.resolve(initialValue))
}

module.exports = train
