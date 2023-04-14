/** @type {import('next').NextConfig} */

const path = require('path');
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "variable.module.scss";`,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg/i,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
