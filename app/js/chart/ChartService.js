
var request = require('superagent');
require('superagent-bluebird-promise');

var host = 'http://localhost:3000/api/chart/';

var ChartService = {
  get: function(id) {
    return request
      .get(host + id)
      .promise();
  }
};

module.exports = ChartService;
