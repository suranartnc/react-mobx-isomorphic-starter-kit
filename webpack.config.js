var path = require('path');
var webpack = require('webpack');

module.exports = {

  // devtool: 'eval-cheap-module-source-map',

  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'src/client.js')
  ],

  output: {
    filename: '[name].js',
    chunkFilename: "[name].js",
    path: path.join(__dirname, 'static', 'build'),
    publicPath: '/build/'
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['', '.json', '.js', '.jsx'],
    root: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'node_modules')
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'BROWSER': true
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};