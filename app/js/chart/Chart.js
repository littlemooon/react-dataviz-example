
var Reflux = require('reflux');

var ChartLoader = require('./ChartLoader'),
    ChartActions = require('./ChartActions'),
    ChartStore = require('./ChartStore');
var LineChartJs = require('../_base/LineChart');
// var LineChartJs = require('react-chartjs').Line;

var LineChart = React.createClass({
  displayName: 'LineChart',
  mixins: [
    Reflux.connect(ChartStore, 'chartData')
  ],

  render: function() {
    var contents = (<ChartLoader/>);

    if (this.state.chartData) {
      contents = (
        <LineChartJs
          data={this.state.chartData}
          options={chartOptions}
          width="600"
          height="250"/>
      );
    }
    return contents;
  }
});

module.exports = LineChart;

var chartOptions = {
  scaleShowGridLines: false,
  pointDot: false
};
