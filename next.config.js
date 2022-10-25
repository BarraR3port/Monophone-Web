/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['mc-heads.net'],
	},
}

module.exports = nextConfig
