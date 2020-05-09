const path = require('path');
module.exports = {
  entry: path.resolve(__dirname, 'app'), //grabs code from the app folder
  output:{
    path: path.resolve(__dirname, 'build'), //create a build folder
    filename: 'bundle.js' // and compiles it into a bundle.js file in the build folder
  },
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, 'build')
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};
