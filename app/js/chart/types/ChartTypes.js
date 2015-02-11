
var R = require('ramda');

var ChartTypeModel = require('./ChartTypeModel.js');

// create the list of chart types
module.exports = [
  ChartTypeModel.create('market-price', 'Market Price (USD)'),
  ChartTypeModel.create('transaction-fees', 'Transaction Fees (BTC)'),
  ChartTypeModel.create('n-transactions', 'Number of Transactions')
];
