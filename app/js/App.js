
// globals
require('expose?React!react/addons');
require('expose?Chart!chart.js');

// main css
require('../css/main.styl');

// Chart.defaults.global.responsive = true;
// Chart.defaults.global.showTooltips = false;

var SelectorList = require('./selector/SelectorList'),
    LineChart = require('./chart/LineChart');

var App = React.createClass({
  displayName: 'App',

  render: function() {
    return (
      <div className='container'>
        <h1>Bitcoin Statistics</h1>
        <SelectorList/>
        <LineChart/>
      </div>
    );
  }
});

React.render(<App/>, document.body);
