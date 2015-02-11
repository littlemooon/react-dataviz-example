
var Reflux = require('reflux');

var ChartLoader = require('./ChartLoader'),
    ChartActions = require('./ChartActions'),
    ChartDataStore = require('./stores/ChartDataStore'),
    ChartRangeStore = require('./stores/ChartRangeStore');

var LineChart = require('../_base/LineChart');

var Chart = React.createClass({
  displayName: 'Chart',
  mixins: [
    Reflux.connect(ChartDataStore, 'chartData'),
    Reflux.connect(ChartRangeStore, 'range')
  ],

  render: function() {
    // fallback loader
    var contents = (<ChartLoader/>);

    // the chart
    if (this.state.chartData) {
      contents = (
        <LineChart
          data={this.state.chartData}
          range={this.state.range}/>
      );
    }

    return (
      <div className='chart'>
        {contents}
      </div>
    );
  }
});

module.exports = Chart;
