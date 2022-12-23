/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['fi', 'en'],
    defaultLocale: 'fi',
  },
};

module.exports = nextConfig;
