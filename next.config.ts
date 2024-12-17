import type { NextConfig } from 'next';
import withSerwistInit from '@serwist/next';

const withSerwist = withSerwistInit({
	cacheOnNavigation: true,
	swSrc: 'src/app/sw.ts',
	swDest: 'public/sw.js',
	// disable: process.env.NODE_ENV !== 'production',
});

const nextConfig: NextConfig = {
	serverExternalPackages: ['header-generator'],
	reactStrictMode: true,
};

export default withSerwist(nextConfig);
