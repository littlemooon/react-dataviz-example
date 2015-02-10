
var Reflux = require('reflux');

var ChartLoader = require('./ChartLoader'),
    ChartActions = require('./ChartActions'),
    ChartStore = require('./ChartStore');

var LineChart = require('../_base/LineChart');

var Chart = React.createClass({
  displayName: 'Chart',
  mixins: [
    Reflux.connect(ChartStore, 'chartData')
  ],

  render: function() {
    // render a fallback loader
    var contents = (<ChartLoader/>);

    // render the chart
    if (this.state.chartData) {
      contents = (<LineChart data={this.state.chartData}/>);
    }

    return (
      <div className='chart'>
        {contents}
      </div>
    );
  }
});

module.exports = Chart;
