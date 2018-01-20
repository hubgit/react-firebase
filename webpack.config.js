const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
    library: 'ReactFirebase',
    libraryTarget: 'commonjs2'
  },
  externals: [nodeExternals({
    modulesFromFile: true,
    whitelist: [/\.(?!js$).{1,5}$/i]
  })],
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ]
}
