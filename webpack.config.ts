const webpack = require('webpack');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
var IgnorePlugin = require('webpack').IgnorePlugin;

module.exports = (config:any, options:any, context:any) => {
  config.plugins.push(
    new NodePolyfillPlugin()
  );
  config.resolve = {
    ...config.resolve,
    fallback: {
      fs: false,
      net: false,
      tls: false,
      child_process: false,
    },
  };


  config.plugins = [
    ...config.plugins,
    new IgnorePlugin({
      checkResource(resource:any) {
        const lazyImports = [
          '@nestjs/microservices',
          '@nestjs/platform-express',
          'cache-manager',
          'class-validator',
          'class-transformer',
        ];
        if (!lazyImports.includes(resource)) {
          return false;
        }
        try {
          require.resolve(resource);
        } catch (err) {
          return true;
        }
        return false;
      },
    }),
  ];
  return config;
};
