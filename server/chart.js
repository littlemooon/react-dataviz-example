
var R = require('ramda');

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
  var x = R.pluck('x', data);
  var y = R.pluck('y', data);

  return {
    x: x,
    y: y
  };
};
