/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: [
      'localhost:3000',
      'https://images.pexels.com',
    ],
  },
  experimental: {
    images: { layoutRaw: true }
  },
}
