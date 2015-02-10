
// global react - for ease of use
require('expose?React!react/addons');

// main css
require('../css/main.styl');

var SelectorList = require('./selector/SelectorList'),
    Chart = require('./chart/Chart');

var App = React.createClass({
  displayName: 'App',

  render: function() {
    return (
      <div className='container'>
        <h1>Bitcoin Statistics</h1>
        <SelectorList/>
        <Chart/>
      </div>
    );
  }
});

React.render(<App/>, document.body);
