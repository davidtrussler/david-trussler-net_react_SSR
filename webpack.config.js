const path = require('path');

module.exports = {
  entry: {
    client: './src/index.js',
    bundle: './src/bundle.js'
  }, 
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'assets')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader')
      }
    ]
  }
}
