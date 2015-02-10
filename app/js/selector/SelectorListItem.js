
var Reflux = require('reflux');

var ChartActions = require('../chart/ChartActions'),
    SelectorStore = require('./SelectorStore');

var SelectorListItem = React.createClass({
  displayName: 'SelectorListItem',
  propTypes: {
    chartId: React.PropTypes.string.isRequired,
    chartName: React.PropTypes.string.isRequired
  },
  mixins: [
    Reflux.listenTo(SelectorStore, '_onSelected')
  ],

  getInitialState: function() {
    return {
      selected: false
    };
  },

  _onSelected: function(chartId) {
    if (chartId === this.props.chartId) {
      this.setState({selected: true});
    }
  },

  _onClick: function() {
    ChartActions.load(this.props.chartId);
  },

  render: function() {
    var classes = 'selector__item';

    if (this.state.selected) {
      classes = classes + '--selected';
    }

    return (
      <li
        className={classes}
        onClick={this._onClick}>
        {this.props.chartName}
      </li>
    );
  }
});

module.exports = SelectorListItem;
