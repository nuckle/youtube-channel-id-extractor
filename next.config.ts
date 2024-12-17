import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	serverExternalPackages: ['header-generator'],
	reactStrictMode: true,
};

export default nextConfig;
