const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require('purgecss-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const minificationOptions = {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  useShortDoctype: true,
  minifyJS: false
}

module.exports = {
  mode: 'production',
  entry: {
    javascript: [
      './src/js/index.js'
    ],
    style: [
      './src/css/_index.scss'
    ],
    minwage: [
      './src/js/minwage/index.js'
    ],
    food: [
      './src/js/foodbanks/index.js'
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.scss$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: 'css/[id].css',
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!sitemap.xml', '!web.config', '!robots.txt']
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      excludeChunks: ['minwage', 'food'],
      minify: minificationOptions
    }),
    new HtmlWebpackPlugin({
      filename: 'es/index.html',
      template: 'src/es/index.html',
      excludeChunks: ['minwage', 'food'],
      minify: minificationOptions
    }),
    new HtmlWebpackPlugin({
      filename: 'feedback/index.html',
      template: 'src/feedback/index.html',
      excludeChunks: ['minwage', 'food'],
      minify: minificationOptions
    }),
    new HtmlWebpackPlugin({
      filename: 'about/index.html',
      template: 'src/about/index.html',
      excludeChunks: ['minwage', 'food'],
      minify: minificationOptions
    }),
    new HtmlWebpackPlugin({
      filename: 'services/california-birth-certificate/index.html',
      template: 'src/services/california-birth-certificate/index.html',
      excludeChunks: ['minwage', 'food'],
      minify: minificationOptions
    }),
    new HtmlWebpackPlugin({
      filename: 'es/services/california-birth-certificate/index.html',
      template: 'src/es/services/california-birth-certificate/index.html',
      excludeChunks: ['minwage', 'food'],
      minify: minificationOptions
    }),
    new HtmlWebpackPlugin({
      filename: 'services/minimum-wage-in-california/index.html',
      template: 'src/services/minimum-wage-in-california/index.html',
      excludeChunks: ['food'],
      minify: minificationOptions
    }),
    new HtmlWebpackPlugin({
      filename: 'es/services/minimum-wage-in-california/index.html',
      template: 'src/es/services/minimum-wage-in-california/index.html',
      excludeChunks: ['food'],
      minify: minificationOptions
    }),
    new HtmlWebpackPlugin({
      filename: 'services/state-of-california-employee-holidays/index.html',
      template: 'src/services/state-of-california-employee-holidays/index.html',
      excludeChunks: ['minwage', 'food'],
      minify: minificationOptions
    }),
    new HtmlWebpackPlugin({
      filename: 'services/find-food-banks-near-you/index.html',
      template: 'src/services/find-food-banks-near-you/index.html',
      excludeChunks: ['minwage'],
      minify: minificationOptions
    }),
    new HtmlWebpackPlugin({
      filename: 'es/services/find-food-banks-near-you/index.html',
      template: 'src/es/services/find-food-banks-near-you/index.html',
      excludeChunks: ['minwage'],
      minify: minificationOptions
    }),
    new HtmlWebpackPlugin({
      filename: 'services/hire-a-licensed-contractor/index.html',
      template: 'src/services/hire-a-licensed-contractor/index.html',
      excludeChunks: ['minwage', 'food'],
      minify: minificationOptions
    }),
    new HtmlWebpackPlugin({
      filename: 'es/services/hire-a-licensed-contractor/index.html',
      template: 'src/es/services/hire-a-licensed-contractor/index.html',
      excludeChunks: ['minwage', 'food'],
      minify: minificationOptions
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer',
      module: 'js'
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'css/fonts/',
              publicPath: 'fonts/',
            }
          }
        ]
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img',
              publicPath: '../img',
            }
          }
        ]
      },
      {
        test: /\.xml$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ],
  },
  output: {
    filename: "js/[name].[chunkhash].js",
    path: path.resolve(__dirname, 'public/'),
  }
};