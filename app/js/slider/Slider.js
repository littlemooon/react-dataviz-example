
var Reflux = require('reflux');

var Slider = React.createClass({
  displayName: 'Slider',


  // render a list item for each chart type
  render: function() {
    return (
      <input
        type='range'
        min='0'
        max='10'/>
    );
  }
});

module.exports = Slider;
