
// global react
require('expose?React!react/addons');
require('expose?Chart!../../lib/Chart.js');
// Chart.defaults.global.responsive = true;
// Chart.defaults.global.showTooltips = false;

// global styles
require('../css/main.styl');

var SelectorList = require('./selector/SelectorList'),
    Chart = require('./chart/Chart');

var App = React.createClass({
  displayName: 'App',

  render: function() {
    return (
      <div className='container'>
        <SelectorList/>
        <Chart/>
      </div>
    );
  }
});

React.render(<App/>, document.body);
