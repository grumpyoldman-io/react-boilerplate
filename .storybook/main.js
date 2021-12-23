const path = require('path');
const cracoConfig = require('../craco.config');

module.exports = {
  staticDirs: ['../public'],
  stories: [
    '../src/**/*.@(stories|story).mdx',
    '../src/**/*.@(stories|story).@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal(baseConfig, options) {
    const config = {
      ...baseConfig,
      module: {
        ...(baseConfig.module ?? {}),
        rules: [...(baseConfig.module?.rules ?? [])],
      },
      resolve: {
        ...(baseConfig.resolve ?? {}),
        alias: {
          ...(baseConfig.alias ?? {}),
          ...cracoConfig.webpack.alias,
        },
      },
    };

    if (options.configType === 'DEVELOPMENT') {
      config.module.rules.push({
        test: /,css&/,
        use: [
          {
            loader: 'postcss-loader',
            ident: 'postcss',
            options: {
              plugins: [],
              verbose: true,
            },
          },
        ],
        include: path.resolve(__dirname, '../'),
      });
    }

    return config;
  },
};
