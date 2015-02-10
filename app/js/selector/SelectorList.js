
var Reflux = require('reflux');

var SelectorListItem = require('./SelectorListItem'),
    SelectorActions = require('./SelectorActions'),
    ChartModel = require('../chart/ChartModel'),
    ChartTypes = require('../chart/ChartTypes');

var SelectorList = React.createClass({
  displayName: 'SelectorList',

  componentDidMount: function() {
    SelectorActions.select(ChartModel.getId(ChartTypes[0]));
  },

  render: function() {
    return (
      <ul className='selector'>
        {
          ChartTypes.map(function(chartType, i) {
            return (
              <SelectorListItem
                key={i}
                chartId={ChartModel.getId(chartType)}
                chartName={ChartModel.getName(chartType)}/>
            );
          })
        }
      </ul>
    );
  }
});

module.exports = SelectorList;
