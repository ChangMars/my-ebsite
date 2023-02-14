const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.good-road-bot.ga/',
        changeOrigin: true,
        secure: true,
        pathRewrite:{
          '^/api': ''
        }
      }
    }
  }
})
