
var Reflux = require('reflux');

var ChartActions = require('../chart/ChartActions');

var SelectorActions = Reflux.createActions([
  'select'
]);

// load the selected chart
SelectorActions.select.preEmit = function(chartId) {
  ChartActions.load(chartId);
};

module.exports = SelectorActions;
