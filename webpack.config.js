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
              sourceMap: true,
              importLoaders: 2,
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
        test: /\.(gif|png|jpe?g|svg|eot|wof|woff|ttf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './images/[name].[ext]'
            }
          }
        ],
      },
    ],
  },
  //プラグインの設定
  plugins: [
    //MiniCssExtractPlugin プラグインのインスタンスを生成
    new MiniCssExtractPlugin({
      //出力される CSS のファイル名を指定
      filename: "css/main.css",
    }),
  ],
  //source-map タイプのソースマップを出力
  devtool: "source-map",
};