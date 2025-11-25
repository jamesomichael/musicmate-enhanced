import './globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'musicmate',
	description: 'A web-based Spotify clone.',
	metadataBase: new URL('https://musicmate.jamesmichael.dev'),
	openGraph: {
		type: 'website',
		url: 'https://musicmate.jamesmichael.dev',
		siteName: 'musicmate',
		images: [
			{
				url: '/musicmate-og.png',
				width: 1200,
				height: 630,
				alt: 'musicmate',
			},
		],
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-32x32.png',
		apple: '/apple-touch-icon.png',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-black min-h-screen antialiased select-none">
				{children}
			</body>
		</html>
	);
}
