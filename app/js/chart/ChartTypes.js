
var ChartModel = require('./ChartModel.js');

module.exports = [
  ChartModel.create('market-price', 'Market Price (USD)'),
  ChartModel.create('total-bitcoins', 'Total Bitcoins in Circulation'),
  ChartModel.create('n-transactions', 'Number of Transactions per Day')
];
