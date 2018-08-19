var webpack = require("webpack");
var path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/App.js",
  output: {
    path: path.resolve(__dirname, "public/build/"),
    filename: "bundle.js"
  },
  devtool: "#source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  }
};
