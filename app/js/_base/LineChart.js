
var ChartJS = require('chart.js');
ChartJS.defaults.global.showTooltips = false;

var LineChart = React.createClass({
  displayName: 'LineChart',
  propTypes: {
    data: React.PropTypes.object.isRequired
  },

  // create
  componentDidMount: function() {
    this._initializeChart(this.props);
  },

  // recreate
  componentWillReceiveProps: function(nextProps) {
    var chart = this.state.chart;
    chart.destroy();
    this._initializeChart(nextProps);
  },

  // destroy
  componentWillUnmount: function() {
    var chart = this.state.chart;
    chart.destroy();
  },

  // set state to a new instance of ChartJS
  _initializeChart: function(nextProps) {
    var el = this.getDOMNode();
    var ctx = el.getContext('2d');
    var chartOptions = {
      scaleShowGridLines: false,
      pointDot: false
    };

    var chart = new ChartJS(ctx).Line(nextProps.data, chartOptions);

    this.setState({chart: chart});
  },

  render: function() {
    // set canvas size
    var canvasProps = {
      width: '800px',
      height: '300px'
    };

    return React.createElement('canvas', canvasProps);
  }
});

module.exports = LineChart;
