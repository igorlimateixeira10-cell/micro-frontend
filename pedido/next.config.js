const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  reactStrictMode: true,
  webpack(config, options) {
    config.output.publicPath = 'http://localhost:3002/';
    config.plugins.push(
      new NextFederationPlugin({
        name: 'pedido',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Pedido': './src/components/Pedido',
        },
        shared: {},
      })
    );
    return config;
  },
};
