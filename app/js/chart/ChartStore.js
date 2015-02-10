
var Reflux = require('reflux');

var ChartActions = require('./ChartActions.js'),
    ChartService = require('./ChartService.js');

var MapStoreMixin = require('../_utils/MapStoreMixin.js');

var ChartStore = Reflux.createStore({
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

  // transform returned data and cache
  _populateData: function(id) {
    var that = this;

    ChartService.get(id)
      .then(function(res) {
        console.log('Received data for: ' + id);
        this.set(id, this._transformData(res.body));
      }.bind(this))
      .catch(function(error) {
        console.log(error);
      });
  },

  // return a chartjs compatible data object
  _transformData: function(data) {
    return {
      labels: data.x,
      datasets: [
        {
          label: "My First dataset",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: data.y
        }
      ]
    };
  }
});

module.exports = ChartStore;
