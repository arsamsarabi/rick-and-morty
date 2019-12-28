const path = require('path')

module.exports = (config, env) => {
  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
        },
      ],
    },
    {
      test: /\.(woff|woff2|eot|ttf)$/,
      loader: 'url-loader?limit=1000&name=fonts/[hash:24].[ext]',
      exclude: /node_modules/,
    },
  ]

  config.resolve.extensions.push('.ts', '.tsx')

  config.resolve.alias = {
    '#components': path.resolve(__dirname, '../src/components'),
    '#pages': path.resolve(__dirname, '../src/pages'),
    '#styles': path.resolve(__dirname, '../src/styles'),
    '#utils': path.resolve(__dirname, '../src/utils'),
    '#graphql': path.resolve(__dirname, '../src/graphql'),
    '#static': path.resolve(__dirname, '../static'),
  }

  return config
}
