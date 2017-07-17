// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
// const dev = process.env.NODE_ENV !== 'production'
// var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
// var webpack = require('webpack');
// var CompressionPlugin = require('compression-webpack-plugin');


// module.exports = {
//   webpack: function (config) {
//     if(!dev){
//             config.plugins.push(
//       // new LodashModuleReplacementPlugin,
//       new CompressionPlugin({
//       asset: "[path].gz[query]",
//       algorithm: "gzip",
//       test: /\.js$|\.css$|\.html$/,
//       threshold: 10240,
//       minRatio: 0.8
//     })
//         )
//     }
//     return config
//   }
// }