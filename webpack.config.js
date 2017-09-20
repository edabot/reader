const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$/,
        options: {
          presets: [ 'react', 'babel-preset-env' ]
        }
      }
    ]
  },
  devtool: 'source-maps'
}

module.exports = config
