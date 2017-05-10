# node-train

[![npm version](https://badge.fury.io/js/node-train.svg)](https://badge.fury.io/js/node-train)
[![Build Status](https://travis-ci.org/pito-svk/node-train.svg?branch=master)](https://travis-ci.org/pito-svk/node-train)

Inspired by Clojure's ["thread-last" macro](https://clojuredocs.org/clojure.core/-%3E%3E).

## Installation

Npm:
```sh
$ npm i node-train
```

Yarn:
```sh
$ yarn add node-train
```

## Use case

```javascript
const train = require('node-train')
const _ = require('lodash')

const calls =
  await train(callsResponse.items,
              addTotalSpendingPerCall,
              addShopNamePerCall,
              addCustomerPerCall,
              addBranchIdPerCall,
              addProductDescriptionPerCall,
              _.last)

return calls

// same as
const calls = callsResponse.items
const callsWithTotalSpending = await addTotalSpendingPerCall(calls)
const callsWithTotalSpendingAndShopName = await addShopNamePerCall(callsWithTotalSpending)
const callsWithTotalSpendingAndShopNameAndCustomer = await addCustomerPerCall(callsWithTotalSpendingAndShopName)
const callsWithTotalSpendingAndShopNameAndCustomerAndBranchId = await addBranchIdPerCall(callsWithTotalSpendingAndShopNameAndCustomer)
const callsWithTotalSpendingAndShopNameAndCustomerAndBranchIdAndProductDescription = await addProductDescriptionPerCall(callsWithTotalSpendingAndShopNameAndCustomerAndBranchId)
const lastCallWithTotalSpendingAndShopNameAndCustomerAndBranchIdAndProductDescription = _.last(callsWithTotalSpendingAndShopNameAndCustomerAndBranchIdAndProductDescription)

return lastCallWithTotalSpendingAndShopNameAndCustomerAndBranchIdAndProductDescription
```
