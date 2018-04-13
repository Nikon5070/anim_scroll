let path = require('path');


module.exports = {
  entry: './src/js/home',
  output: {
    path: path.resolve(__dirname,'./dist'),
    filename: 'app.js',
    publicPath: 'dist/'
  },
  devServer: {
    overlay: true
  }

};

