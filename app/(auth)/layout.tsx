import type { Metadata } from 'next';
import StoreProvider from '@/redux/StoreProvider';

import '../globals.css';

import Footer from '@/components/shared/Footer';

export const metadata: Metadata = {
	title: 'musicmate',
	description: 'musicmate',
	// openGraph: {
	// 	type: 'website',
	// 	url: 'https://musicmate.jamesmichael.dev',
	// 	siteName: 'musicmate',
	// 	images: [
	// 		{
	// 			url: '/assets/musicmate-og.png',
	// 			width: 800,
	// 			height: 600,
	// 			alt: 'musicmate',
	// 		},
	// 	],
	// },
	// icons: {
	// 	icon: '/favicon.ico',
	// 	shortcut: '/favicon.ico',
	// 	apple: '/favicon.ico',
	// },
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<StoreProvider>
			<html lang="en">
				<body className="bg-black select-none antialiased">
					<div className="min-h-screen h-screen">{children}</div>
					<Footer />
				</body>
			</html>
		</StoreProvider>
	);
}
