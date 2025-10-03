import '../globals.css';

import type { Metadata } from 'next';

import AuthLayout from '@/layouts/AuthLayout';

import StoreProvider from '@/redux/StoreProvider';

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
			<AuthLayout>{children}</AuthLayout>;
		</StoreProvider>
	);
}

export const dynamic = 'force-dynamic';
export const revalidate = 60;
