
var Reflux = require('reflux');

var ChartLoader = require('./ChartLoader'),
    ChartActions = require('./ChartActions'),
    ChartStore = require('./ChartStore');

var LineChart = require('react-chartjs').Line;

var Chart = React.createClass({
  displayName: 'Chart',
  mixins: [
    Reflux.connect(ChartStore, 'chartData')
  ],

  render: function() {
    var contents = (<ChartLoader/>);

    if (this.state.chartData) {
      contents = (
        <LineChart
          data={this.state.chartData}
          options={chartOptions}
          width="600"
          height="250"/>
      );
    }
    return contents;
  }
});

module.exports = Chart;

var chartOptions = {
  scaleShowGridLines: false,
  pointDot: false
};
