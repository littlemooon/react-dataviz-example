
var webpack = require('webpack');

module.exports = {
  devServer: true,
  devtool: 'eval',
  debug: true,

  entry: [
    'webpack-dev-server/client?http://localhost:3010',
    'webpack/hot/only-dev-server',
    './app/js/App.js'
  ],
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js',
    publicPath: 'http://localhost:3010/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'jsx?harmony'], exclude: /node_modules/ },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
    ]
  }
};
