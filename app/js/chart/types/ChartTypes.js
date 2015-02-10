
var R = require('ramda');

var ChartTypeModel = require('./ChartTypeModel.js');

// create the list of chart types
module.exports = [
  ChartTypeModel.create('market-price', 'Market Price (USD)'),
  ChartTypeModel.create('total-bitcoins', 'Total Bitcoins in Circulation'),
  ChartTypeModel.create('n-transactions', 'Number of Transactions per Day')
];
