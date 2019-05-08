module.exports = {
  configureWebpack: config => {},
  devServer: {
    // host: 'localhost',
    // port: 8080,
    // https: false,
    open: true, //配置自动启动浏览器 
    proxy: {
      '/api': {
        target: 'https://api.douban.com/v2',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}