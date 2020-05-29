var webpack = require("webpack");
var path = require("path");
var SRC_DIR = path.join(__dirname, "/client");
var DIST_DIR = path.join(__dirname, "/static");

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  mode: "development",
  output: {
    filename: "bundle.js",
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
};