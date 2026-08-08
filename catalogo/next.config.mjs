import NextFederationPlugin from '@module-federation/nextjs-mf';

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'catalogo',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Cardapio': './components/Cardapio.jsx', // Ajustado para a pasta correta
        },
        shared: {},
      })
    );
    return config;
  },
};

export default nextConfig;