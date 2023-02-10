const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭语法检查

  // 开启代理服务器(方式一)
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // },

  // 开启代理服务器(方式二)
  // devServer: {
  //   proxy: {
  //     // 代理服务器的路由头
  //     '/api': {
  //       target: 'http://localhost:5001',
  //       // 重写路径令服务器端可识别
  //       pathRewrite: {
  //         '^/api': ''
  //       },
  //       // 用于支持websocket
  //       ws: true,
  //       // 隐藏真实请求的url
  //       // 控制请求头中的host值
  //       changeOrigin: true
  //     }
  //   }
  // }

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5008',
        pathRewrite: {
          '^/api': ''
        },
        ws: true
      }
    }
  }
})