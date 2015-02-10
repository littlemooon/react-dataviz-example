
var ChartJS = require('chart.js');
// ChartJS.defaults.global.responsive = true;
ChartJS.defaults.global.showTooltips = false;

var LineChart = React.createClass({
  displayName: 'LineChart',

  componentDidMount: function() {
    this._initializeChart(this.props);
  },

  componentWillReceiveProps: function(nextProps) {
    var chart = this.state.chart;
    chart.destroy();
    this._initializeChart(nextProps);
  },

  componentWillUnmount: function() {
    var chart = this.state.chart;
    chart.destroy();
  },

  _initializeChart: function(nextProps) {
    var el = this.getDOMNode();
    var ctx = el.getContext('2d');
    var chart = new ChartJS(ctx).Line(nextProps.data, nextProps.options || {});

    this.setState({chart: chart});
  },

  render: function() {
    var _props = {};
    for (var name in this.props) {
      if (this.props.hasOwnProperty(name)) {
        if (name !== 'data' && name !== 'options') {
          _props[name] = this.props[name];
        }
      }
    }
    return React.createElement('canvas', _props);
  }
});

module.exports = LineChart;
