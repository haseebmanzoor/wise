/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["pbs.twimg.com", "encrypted-tbn0.gstatic.com"],
	},
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
};

module.exports = nextConfig;
