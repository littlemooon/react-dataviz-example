
var R = require('ramda'),
    moment = require('moment');

var request = require('superagent');
require('superagent-bluebird-promise');

// setup chart data entry point
exports.init = function (app) {
  app.get('/api/chart/:id', getChart);
};

// request chart data
var getChart = function(req, res) {
  return request
    .get('https://blockchain.info/charts/' + req.params.id)
    .query({format: 'json'})
    .promise()

    // transform and return
    .then(function(data) {
      res.send(transformData(data.body.values));
    })

    // log errors
    .catch(function(error) {
      console.log(error);
    });
};

// transform data for the client
var transformData = function(data) {
  var agg = aggregate(data);
  var dates = R.keys(agg);

  var values = R.map(function(date) {
    return agg[date].total / agg[date].count;
  }, dates);

  return {
    x: dates,
    y: values
  };
};

var aggregate = function(data) {
    return R.foldl(function(acc, dataPoint) {
    var day = moment(dataPoint.x, 'X').startOf('month').format("DD/MM/YY");

    if (acc[day]) {
      acc[day].total = acc[day].total + dataPoint.y;
      acc[day].count = acc[day].count + 1;
    } else {
      acc[day] = {
        total: dataPoint.y,
        count: 1
      };
    }

    return acc;
  }, {}, data);
};
