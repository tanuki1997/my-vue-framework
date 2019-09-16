const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@img', resolve('src/assets/img'))

      .set('@views', resolve('src/views'))
      .set('@components', resolve('src/components'))

      .set('@componentsJs', resolve('src/components/js'))
      .set('@viewsJs', resolve('src/views/js'))

      .set('@viewsCs', resolve('src/views/css'))

      .set('@api', resolve('src/api'))
      .set('@utils', resolve('src/utils'))
  },
  baseUrl: '/',
  devServer: {
    // proxy:'http://192.168.10.38:8096'
    port:8080,

    proxy: {
      '/admin': {
        target: 'http://192.168.10.38:8096',
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          '^/admin/getMenuTree': '/web/core/menu/getMenuTree.do',
          '^/admin/login': '/web/core/user/login.do',
          '^/admin/logout': '/web/core/user/logout.do'
        }
      },
    }
  }
}
