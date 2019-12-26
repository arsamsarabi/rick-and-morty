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
      '/blog': { page: '/blog' },
    }
    return paths
  },
  webpack: function(config) {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]
    return config
  },
})
