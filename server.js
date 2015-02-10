
var express = require('express'),
    fs = require('fs');

// create app
var app = express();

// setup index route
app.use(express.static(__dirname));
app.get('/', function(req, res) {
  res.render('/index.html');
});

// mount all routes defined in the server folder
fs.readdirSync('./server').forEach(function (file) {
  if (file.substr(-3) === '.js') require('./server/' + file).init(app);
});

// start server
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server listening at http://%s:%s', host, port);
});
