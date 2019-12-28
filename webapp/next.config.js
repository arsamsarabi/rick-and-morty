require('dotenv').config()
const webpack = require('webpack')
const path = require('path')
const withFonts = require('next-fonts')

module.exports = withFonts({
  enableSvg: true,
  exportTrailingSlash: true,
  devIndicators: {
    autoPrerender: false,
  },
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
    }
    return paths
  },
  webpack: function(config) {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]
    config.plugins = [...config.plugins, new webpack.EnvironmentPlugin(process.env)]
    config.resolve.alias = {
      ...config.resolve.alias,
      '#components': path.resolve(__dirname, './src/components'),
      '#pages': path.resolve(__dirname, './src/pages'),
      '#styles': path.resolve(__dirname, './src/styles'),
      '#utils': path.resolve(__dirname, './src/utils'),
      '#graphql': path.resolve(__dirname, './src/graphql'),
      '#static': path.resolve(__dirname, './static'),
    }
    return config
  },
})
