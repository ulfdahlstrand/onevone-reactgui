var webpack = require('webpack');
module.exports = {
  devtool: "#inline-source-map",
  entry: [
    "webpack-dev-server/client?http://localhost:3001",
    "webpack/hot/only-dev-server",
    "./src/app.js"
  ],
  output: {
    path: __dirname + "/src",
    filename: 'bundle.js',
    publicPath: "http://localhost:3001/src/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.js$/, loader: 'react-hot!jsx-loader?harmony', exclude: /node_modules/ } 
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.coffee', '.less'] 
  }
};
