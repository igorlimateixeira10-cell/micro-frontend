const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  reactStrictMode: true,
  webpack(config, options) {
    config.output.publicPath = 'http://localhost:3001/';
    config.plugins.push(
      new NextFederationPlugin({
        name: 'container',
        filename: 'static/chunks/remoteEntry.js',
          remotes: {
            catalogo: 'catalogo@http://localhost:3000/_next/static/chunks/remoteEntry.js',
            pedido: 'pedido@http://localhost:3002/_next/static/chunks/remoteEntry.js',
          },
        shared: {},
      })
    );
    return config;
  },
};