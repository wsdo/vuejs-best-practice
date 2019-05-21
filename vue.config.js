const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    port: 8080,
    disableHostCheck: true,
    proxy: {
      '/v1': { //代理api
        target: 'http://api.shudong.wang/v1', //服务器api地址-
        changeOrigin: true, //是否跨域
        ws: true, // proxy websockets
        pathRewrite: { //重写路径
          '^/v1': ''
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
  }
}
