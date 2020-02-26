const path = require('path')

function resolve(dir) {
  path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.VUE_APP_PUBLICPATH,
  outputDir: 'imageViewer',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      '/api': {
        // 此处并非和url一致
        target: 'http://39.105.16.68:8075/openwallet/', // 测试环境
        // target: 'http://192.168.135.193:8082/wallet', // 伟杰
        // target: 'http://192.168.135.193:8087', // 伟杰
        changeOrigin: true, // 允许跨域
        ws: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  configureWebpack: {
    name: '图片编辑器',
    resolve: {
      alias: {
        '@': resolve('src'),
        images: '@/assets/images',
        components: '@/components',
        views: '@/views',
      },
    },
    // module: {
    //   rules: [{
    //     test: /\.less$/,
    //     use: [{
    //       loader: 'less-loader',
    //       options: {
    //         modifyVars: {
    //           hack: `true; @import "${path.join(__dirname, './src/vant.less')}"`,
    //         },
    //       },
    //     }, ],
    //   }, ],
    // },
  },
}