
var Reflux = require('reflux');

var SelectorListItem = require('./SelectorListItem'),
    SelectorActions = require('./SelectorActions'),
    ChartTypeModel = require('../chart/types/ChartTypeModel'),
    ChartTypes = require('../chart/types/ChartTypes');

var SelectorList = React.createClass({
  displayName: 'SelectorList',

  // select the first chart type initially
  componentDidMount: function() {
    SelectorActions.select(ChartTypeModel.getId(ChartTypes[0]));
  },

  // render a list item for each chart type
  render: function() {
    return (
      <ul className='selector'>
        {
          ChartTypes.map(function(chartType, i) {
            return (
              <SelectorListItem
                key={i}
                chartId={ChartTypeModel.getId(chartType)}
                chartName={ChartTypeModel.getName(chartType)}/>
            );
          })
        }
      </ul>
    );
  }
});

module.exports = SelectorList;
