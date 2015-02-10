
var Reflux = require('reflux');

var ChartActions = require('./ChartActions.js'),
    ChartService = require('./ChartService.js');

var MapStoreMixin = require('../_utils/MapStoreMixin.js');

var ChartStore = Reflux.createStore({
  listenables: ChartActions,
  mixins: [MapStoreMixin],

  onLoad: function(id) {
    var chartData = this.get(id);
    if (chartData) {
      this.trigger(chartData);
    } else {
      this._populateData(id);
    }
  },

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

// [
//   {
//     x: 1313131313,
//     y: 2424242424
//   },
//   {
//     x: 1313131313,
//     y: 2424242424
//   },
//   {
//     x: 1313131313,
//     y: 2424242424
//   },
//   {
//     x: 1313131313,
//     y: 2424242424
//   },
//   {
//     x: 1313131313,
//     y: 2424242424
//   }
// ]

var data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: "My Second dataset",
      fillColor: "rgba(151,187,205,0.2)",
      strokeColor: "rgba(151,187,205,1)",
      pointColor: "rgba(151,187,205,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,1)",
      data: [28, 48, 40, 19, 86, 27, 90]
    }
  ]
};
