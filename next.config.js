const withNextIntl = require("next-intl/plugin")("./i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = withNextIntl(nextConfig);
