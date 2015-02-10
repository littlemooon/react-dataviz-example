
var Reflux = require('reflux');

var ChartActions = require('../chart/ChartActions');

var SelectorActions = Reflux.createActions([
  'select'
]);

SelectorActions.select.preEmit = function(chartId) {
  ChartActions.load(chartId);
};

module.exports = SelectorActions;
