const R = require('ramda')
const Promise = require('bluebird')

function train (initialValue, ...list) {
  return R.flatten(list)
    .reduce((acc, fn) => {
      if (acc && acc.then && typeof acc.then === 'function') {
        return Promise.resolve(acc).then(fn)
      } else {
        return fn(acc)
      }
    }, initialValue)
}

module.exports = train
