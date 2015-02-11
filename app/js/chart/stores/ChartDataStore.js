
var Reflux = require('reflux');

var ChartActions = require('../ChartActions.js'),
    ChartService = require('../ChartService.js');

var MapStoreMixin = require('../../_utils/MapStoreMixin.js');

var ChartDataStore = Reflux.createStore({
  listenables: ChartActions,
  mixins: [MapStoreMixin],

  // return cached data or populate from server
  onLoad: function(id) {
    var chartData = this.get(id);

    if (chartData) {
      this.trigger(chartData);
    } else {
      this._populateData(id);
    }
  },

  // transform data returned from the server and cache
  _populateData: function(id) {
    var that = this;

    ChartService.get(id)
      .then(function(res) {
        console.log('Received data for: ' + id);
        this.set(id, res.body);
      }.bind(this))
      .catch(function(error) {
        console.log(error);
      });
  }
});

module.exports = ChartDataStore;
