import type { Metadata } from 'next';

import '../globals.css';

import AppLayout from '@/layouts/AppLayout';

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
	return <AppLayout>{children}</AppLayout>;
}
