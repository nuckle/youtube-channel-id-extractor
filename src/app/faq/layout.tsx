import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'FAQ',
	openGraph: {
		title: 'FAQ',
	},
};

export default function FaqLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return children;
}
