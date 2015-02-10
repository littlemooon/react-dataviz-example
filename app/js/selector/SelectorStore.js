
var Reflux = require('reflux');

var SelectorActions = require('./SelectorActions.js');

var SelectorStore = Reflux.createStore({
  listenables: SelectorActions,

  onSelect: function(chartId) {
    this.trigger(chartId);
  }
});

module.exports = SelectorStore;
