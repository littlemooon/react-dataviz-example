
var R = require('ramda');

var request = require('superagent');
require('superagent-bluebird-promise');

// setup chart data entry point
exports.init = function (app) {
  app.get('/api/chart/:id', getChart);
};

var getChart = function(req, res) {
  // request chart data
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

var transformData = function(data) {
  var x = R.map(function(x) {
    return x;
  }, R.pluck('x', data));

  var y = R.map(function(y) {
    return y;
  }, R.pluck('y', data));

  return {
    x: x,
    y: y
  };
};
