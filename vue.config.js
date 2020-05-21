// module.exports = {
//     outputDir: "dist", // where to put static assets (js/css/img/font/...) // 是否在保存时使用‘eslint-loader’进行检查 // 有效值: true | false | 'error' // 当设置为‘error’时，检查出的错误会触发编译失败
//     lintOnSave: true, // 使用带有浏览器内编译器的完整构建版本 // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
//     runtimeCompiler: false, // babel-loader默认会跳过`node_modules`依赖. // 通过这个选项可以显示转译一个依赖
//     transpileDependencies: [
//     ],
  
//     productionSourceMap: false, // 调整内部的webpack配置. // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
//     chainWebpack: () => {},
//     configureWebpack: () => {}, // CSS 相关选项
//     css: {
//       extract: true, // 允许生成 CSS source maps?
//       sourceMap: false, // pass custom options to pre-processor loaders. e.g. to pass options to // sass-loader, use { sass: { ... } }
//       loaderOptions: {}, // Enable CSS modules for all css / pre-processor files. // This option does not affect *.vue files.
//       modules: false
//     }, 
  
//     parallel: require("os").cpus().length > 1, 
//     pwa: {},
//     devServer: {
//       open: process.platform === "darwin",
//       disableHostCheck: false,
//       host: "0.0.0.0",
//       port: 8080,
//       https: false,
//       hotOnly: false,
//       proxy: {
//         // '/api': {
//         //     target:'http://120.78.186.60:8086', // 你请求的第三方接口
//         //     changeOrigin:true,
//         //     pathRewrite:{  // 路径重写，
//         //       '^/api': ''  
//         //     }
//         //   }
//         '/github': {
//             target:'https://github.com', // 你请求的第三方接口
//             changeOrigin:true,
//             pathRewrite:{  // 路径重写，
//               '^/github': '/'  
//             }
//           }
//       }
//     }, 
  
//     pluginOptions: {
//     }
//   };


// vue.config.js
module.exports = {
  devServer: {
    host: "127.0.0.1",
    port: 8080,

  //     proxy: {
  //       '/api': {
  //           target:'http://120.78.186.60:8087', // 你请求的第三方接口
  //           changeOrigin:true,
  //           // pathRewrite:{  // 路径重写，
  //           //   '^/api': ''  
  //           // }
  //     } 
  // }
}
}