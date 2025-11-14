/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/.well-known/farcaster.json',
        destination: 'https://api.farcaster.xyz/miniapps/hosted-manifest/019a8376-a264-9cf4-477e-9379700d7d1d',
        permanent: false,  // This will make it a 307 Temporary Redirect
      },
    ]
  },
}

module.exports = nextConfig;
