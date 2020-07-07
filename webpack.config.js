const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')


/**
 * All client side configuration is disabled for the preent 
 * It si not currently being used and causes some issues with the PostGres database
 *
const browserConfig = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: 'production', 
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ]
}
*/

const serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/'
  },
  mode: 'production', 
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' }, 
      { test: /\.(scss)$/, use: ['css-loader', 'sass-loader']}
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
}

module.exports = [
  // browserConfig, 
  serverConfig
]
