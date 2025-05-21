/**
 * Plugin para adicionar o yaml-loader ao Webpack no Docusaurus
 */
module.exports = function (context, options) {
    return {
      name: 'custom-webpack-plugin',
      configureWebpack(config, isServer) {
        return {
          module: {
            rules: [
              {
                test: /\.ya?ml$/,
                use: 'yaml-loader',
              },
            ],
          },
        };
      },
    };
  };