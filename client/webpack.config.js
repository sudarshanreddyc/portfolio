const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { SourceMapDevToolPlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const PUBLIC_URL = "https://sudarshanreddyc.github.io/portfolio";
// process.env.NODE_ENV === "production"
//   ? "https://sudarshanreddyc.github.io/portfolio"
//   : "http://localhost:3000"; // ✅ Define PUBLIC_URL for both local and production

console.log("Node env" + process.env.NODE_ENV);

module.exports = {
  mode: "production",
  devtool: false,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/portfolio/", // ✅ Use your GitHub Pages repo name here
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            sourceMaps: true,
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][ext]",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "public/assets", to: "assets" }],
    }),
    new webpack.DefinePlugin({
      "process.env.PUBLIC_URL": JSON.stringify(PUBLIC_URL), // ✅ Define process.env.PUBLIC_URL globally
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
};
