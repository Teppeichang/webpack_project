const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

  entry: './src/main.js',  
  output: { 
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: true,
              importLoaders: 2
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: false
              },
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpeg|jpg|svg|eot|wof|woff|ttf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './img/[name].[ext]'
            }
          }
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/main.css",
    }),
  ],
  devtool: "source-map",
};