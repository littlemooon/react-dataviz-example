
var webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  contentBase: 'http://localhost:3010',
  publicPath: config.output.publicPath,
  noInfo: true,
  hot: true
}).listen(3010, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:3010');
});
