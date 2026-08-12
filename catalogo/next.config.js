const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  reactStrictMode: true,
  webpack(config, options) {
    config.output.publicPath = 'http://localhost:3000/';
    config.plugins.push(
      new NextFederationPlugin({
        name: 'catalogo',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Cardapio': './src/components/Cardapio',
        },
        shared: {},
      })
    );
    return config;
  },
};