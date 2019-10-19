'use strict';
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  chainWebpack: config => {
    config.plugin('manifest').use(ManifestPlugin);
  },
  devServer: {
    public: '0.0.0.0:8081',
    disableHostCheck: true,
    hotOnly: false
  },
  configureWebpack: {
    entry: {
      app: './assets/src/main.ts',
    },
    optimization: {
      splitChunks: false
    },
    resolve: {
      alias: {
        '@': path.resolve('assets/src/')
      }
    }
  }
};
