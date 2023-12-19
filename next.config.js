const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
});

module.exports = withNextra({
  basePath: process.env.GITHUB_ACTIONS && '/CommandReference',
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
});
