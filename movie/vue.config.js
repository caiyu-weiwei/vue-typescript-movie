module.exports = {
  configureWebpack: config => {},
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api.douban.com/v2',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}