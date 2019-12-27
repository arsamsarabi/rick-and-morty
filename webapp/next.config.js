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
    return config
  },
})
