
var d3 = require('d3'),
    R = require('ramda');

var LineChart = React.createClass({
  displayName: 'LineChart',
  propTypes: {
    data: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        x: React.PropTypes.string,
        y: React.PropTypes.number
      })).isRequired,
    range: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string
    ])
  },

  // create
  componentDidMount: function() {
    this._initializeChart(this.props);
  },

  // recreate
  componentWillReceiveProps: function(nextProps) {
    this._destroyChart();
    this._initializeChart(nextProps);
  },

  // destroy
  componentWillUnmount: function() {
    this._destroyChart();
  },

  // create the chart
  _initializeChart: function(nextProps) {
    // props
    var range = nextProps.range;
    var data = R.slice(nextProps.data.length - 1 - range, nextProps.data.length -1, nextProps.data);

    // date helper
    var _date = function(d) { return new Date(d); };

    // dimensions
    var margin = {top: 20, right: 60, bottom: 20, left: 60};
    var width = 800 - margin.right - margin.left;
    var height = 360 - margin.top - margin.bottom;

    // time series x axis
    var x = d3
      .time.scale()
      .domain([_date(data[0].x), _date(data[data.length - 1].x)])
      .range([0, width]);

    // linear series y axis
    var y = d3
      .scale.linear()
      .domain([0, d3.max(data, function(d){return d.y;}) * (6/5)])
      .range([height, 0]);

    // line generator
    var line = d3.svg.line()
      .interpolate('basis')
      .x(function(d) {
        return x(_date(d.x));
      })
      .y(function(d) {
        return y(d.y);
      });

    // area generator
    var area = d3.svg.area()
      .interpolate('basis')
      .x(function(d) {
        return x(_date(d.x));
      })
      .y0(height)
      .y1(function(d) {
        return y(d.y);
      });

    // create axis
    var xAxis = d3.svg.axis().scale(x);
    var yAxis = d3.svg.axis().scale(y).tickSize(-width).orient('left');

    // create svg
    var graph = d3.select(this.getDOMNode()).append('svg:svg')
      .attr('width', width + margin.right + margin.left)
      .attr('height', height + margin.top + margin.bottom)
      .append('svg:g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // add area
    graph.append('svg:path')
      .attr('class', 'area')
      .attr('width', width)
      .attr('height', height)
      .attr('d', area(data));

    // add axis
    graph.append('svg:g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis);
    graph.append('svg:g')
      .attr('class', 'y axis')
      .call(yAxis);

    // add line
    graph.append('svg:path')
      .attr('width', width)
      .attr('height', height)
      .attr('d', line(data));
  },

  // clear the node
  _destroyChart: function() {
    this.getDOMNode().innerHTML = '';
  },

  render: function() {
    return <div className='linechart'/>;
  }
});

module.exports = LineChart;
