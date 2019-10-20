'use strict';
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  chainWebpack: config => {
    config.plugin('manifest').use(ManifestPlugin);
  },
  devServer: {
    public: '0.0.0.0:8080',
    disableHostCheck: true,
    hotOnly: false
  },
  configureWebpack: {
    entry: {
      app: './app/assets/src/main.ts',
    },
    optimization: {
      splitChunks: false
    },
    resolve: {
      alias: {
        '@': path.resolve('app/assets/src/')
      }
    }
  }
};
