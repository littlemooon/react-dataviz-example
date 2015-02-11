
var Reflux = require('reflux');

var ChartActions = require('../ChartActions.js');

var ChartRangeStore = Reflux.createStore({
  listenables: ChartActions,

  // propagate new maximum range value
  onSetRange: function(range) {
    this.trigger(range);
  }
});

module.exports = ChartRangeStore;
