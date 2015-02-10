
var Reflux = require('reflux');

var Slider = React.createClass({
  displayName: 'Slider',

  getInitialState: function() {
    return {
      max: 10,
      min: 1,
      value: 10
    };
  },

  _onChange: function(e) {
    this.setState({value: e.target.value});
  },

  // render a list item for each chart type
  render: function() {
    return (
      <div className='slider'>
        <p className='slider__label'>
          No. of days into the past:
        </p>
        <p className='slider__value'>
          {this.state.value}
        </p>
        <input
          className='slider__input'
          type='range'
          min={this.state.min}
          max={this.state.max}
          onChange={this._onChange}/>
      </div>
    );
  }
});

module.exports = Slider;
