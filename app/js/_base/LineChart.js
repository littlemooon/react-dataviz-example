
var d3 = require('d3');

var LineChart = React.createClass({
  displayName: 'LineChart',
  propTypes: {
    data: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        x: React.PropTypes.string,
        y: React.PropTypes.number
      })).isRequired
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
    var data = nextProps.data;

    // dimensions
    var margin = {top: 0, right: 60, bottom: 20, left: 60};
    var width = 800 - margin.right - margin.left;
    var height = 400 - margin.top - margin.bottom;

    // create a simple data array that we'll plot with a line (this array represents only the Y values, X will just be the index location)
    // data = [3, 6, 2, 7, 5, 2, 0, 3, 8, 9, 2, 5, 9, 3, 6, 3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 9, 2, 7];

    // X scale will fit all values from data[] within pixels 0-w
    // var x = d3.scale.linear().domain([0, data.length - 1]).range([0, width]);
    var x = d3
      .time.scale()
      .domain([new Date(data[0].x), d3.time.day.offset(new Date(data[data.length - 1].x), 1)])
      .range([0, width]);

    // Y scale will fit values from 0-max within pixels h-0 (Note the inverted domain for the y-scale: bigger is up!)
    var y = d3
      .scale.linear()
      .domain([0, d3.max(data, function(d){return d.y;}) * (6/5)])
      .range([height, 0]);

    // create a line function that will convert data into x and y points
    var line = d3.svg.line()
      .interpolate('basis')
      .x(function(d) {
        return x(new Date(d.x));
      })
      .y(function(d) {
        return y(d.y);
      });

    // create an area function that will fill below the x coordinates
    var area = d3.svg.area()
      .interpolate('basis')
      .x(function(d) {
        return x(new Date(d.x));
      })
      .y0(height)
      .y1(function(d) {
        return y(d.y);
      });

    // create x-axis
    var xAxis = d3.svg.axis().scale(x);

    // create y-axis
    var yAxis = d3.svg.axis().scale(y).ticks(6).orient('left');

    // add svg with dimensions
    var graph = d3.select(this.getDOMNode()).append('svg:svg')
      .attr('width', width + margin.right + margin.left)
      .attr('height', height + margin.top + margin.bottom)
      .append('svg:g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // add the area
    graph.append('svg:path')
      .attr('class', 'area')
      .attr('d', area(data));

    // add the line
    graph.append('svg:path')
      .attr('d', line(data));

    // add the x-axis.
    graph.append('svg:g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis);

    // add the y-axis
    graph.append('svg:g')
      .attr('class', 'y axis')
      .call(yAxis);
  },

  _destroyChart: function() {
    this.getDOMNode().innerHTML = '';
  },

  render: function() {
    return <div className='linechart'/>;
  }
});

module.exports = LineChart;
