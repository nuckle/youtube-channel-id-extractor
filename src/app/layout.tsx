import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';
import { Providers } from './providers';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const titleContent = 'Youtube Channel Id Extractor';

export const metadata: Metadata = {
	authors: [
		{
			url: 'https://github.com/nuckle',
			name: 'nuckle',
		},
	],
	title: {
		template: `%s | ${titleContent}`,
		default: `${titleContent}`,
	},
	description: 'A tool to extract Youtube Channel ID',
	keywords:
		'youtube channel information, youtube channel id, get youtube channel id, extract youtube rss feed, youtube free channel parser',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		// Add suppressHydrationWarning this is what the official documentation says
		// https://github.com/pacocoursey/next-themes
		<html lang='en' suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Providers themeProps={{ attribute: 'class', defaultTheme:'system', enableSystem: true }}>
					<div className='max-w-screen-md m-auto px-4 min-h-screen flex flex-col'>
						<Header />
						<main>{children}</main>
						<Footer className='mt-auto' />
					</div>
				</Providers>
			</body>
		</html>
	);
}
