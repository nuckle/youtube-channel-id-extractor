import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'FAQ',
	description: 'Find answers to common questions about extracting YouTube Channel IDs. Our FAQ page covers troubleshooting, usage tips, and more to help you get the most out of our tool',
	openGraph: {
		title: 'FAQ',
		description: 'Find answers to common questions about extracting YouTube Channel IDs. Our FAQ page covers troubleshooting, usage tips, and more to help you get the most out of our tool'
	},
};

export default function FaqLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return children;
}
