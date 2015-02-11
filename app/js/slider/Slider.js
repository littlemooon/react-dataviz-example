
var Reflux = require('reflux');

var ChartActions = require('../chart/ChartActions');

var Slider = React.createClass({
  displayName: 'Slider',
  mixins: [
    React.addons.LinkedStateMixin
  ],

  getInitialState: function() {
    return {
      max: 364,
      value: 364
    };
  },

  _onChange: function(newValue) {
    this.setState({
      value: newValue
    });
    ChartActions.setRange(newValue);
  },

  // render a list item for each chart type
  render: function() {
    var valueLink = {
      value: this.state.value,
      requestChange: this._onChange
    };

    return (
      <div className='slider'>
        <p className='slider__label'>
          History for the last
        </p>
        <p className='slider__label'>
          {this.state.value}
        </p>
        <p className='slider__label'>
          days
        </p>
        <input
          className='slider__input'
          type='range'
          min='2'
          max={this.state.max}
          valueLink={valueLink}/>
      </div>
    );
  }
});

module.exports = Slider;
