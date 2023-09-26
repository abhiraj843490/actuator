const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin')


module.exports = {
   entry: ['@babel/polyfill', './src/index.js'],
   output: {
      path: path.join(__dirname, '/../main/resources/static/built/'),
      filename: 'bundle.js',
      publicPath: '/built/',
   },
   devServer: {
      inline: true,
      port: 8005
   },
   module: {
      rules: [
         {
            test: /\.js$|jsx/, // files ending with .js
            exclude: /node_modules/, // exclude the node_modules directory
            loader: "babel-loader" // use this (babel-core) loader
         },
         {
            test: /\.s[ac]ss$/i,
            exclude: /node_modules/,
            use: [
               // Creates style nodes from JS strings
               'style-loader',
               // Translates CSS into CommonJS
               'css-loader',
               // Compiles Sass to CSS
               'sass-loader',
            ],
         },

         {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
            exclude: /\.module\.css$/,
         },
         {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
               'file-loader',
               {
                  loader: 'image-webpack-loader',
                  options: {
                     bypassOnDebug: true, // webpack@1.x
                     disable: true, // webpack@2.x and newer
                  },
               },
            ],
         },
         {
            test: /^(?!.*\.generated\.ttf$).*\.ttf$/,
            use: ['css-loader', 'fontface-loader'],
         }, {
            test: /\.generated.(ttf|eot|woff|woff2)$/,
            use: ['file-loader'],
         },


      ]
   },
   devServer: {
      historyApiFallback: true,
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './public/index.html'
      }),
      new LoadablePlugin()
   ]
}