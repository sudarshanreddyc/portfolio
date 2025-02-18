const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { SourceMapDevToolPlugin } = require("webpack");

module.exports = {
  mode: "production",
  devtool: false, // Disable default source maps
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"), // Output folder
    filename: "bundle.js",
    publicPath: process.env.REACT_APP_BASE_URL || "/", // Important for GitHub Pages deployment
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            sourceMaps: true, // Generate source maps via Babel
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new SourceMapDevToolPlugin({
      filename: "[file].map", // Generate source maps for all files
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Reference to index.html
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
    historyApiFallback: true, // For React Router fallback
    hot: true,
  },
};
