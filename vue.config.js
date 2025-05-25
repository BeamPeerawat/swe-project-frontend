const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/',
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://swe-project-backend-g841.onrender.com',
        changeOrigin: true,
      },
    },
  },
});