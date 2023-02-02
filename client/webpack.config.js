const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProd = process.env.NODE_ENV === "production";

const baseConfig = {
  mode: isProd ? "production" : "development",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts", ".tsx"],
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
};

const devConfig = {
  devtool: "source-map",
  devServer: {
    allowedHosts: "all",
    proxy: {
      port: 8080,
      "/api": {
        target: "http://localhost:3000",
      },
    },
  },
};

const prodConfig = {
  output: {
    path: path.resolve(__dirname, "dist"),
  },
};

module.exports = {
  ...baseConfig,
  ...(isProd ? prodConfig : devConfig),
};
