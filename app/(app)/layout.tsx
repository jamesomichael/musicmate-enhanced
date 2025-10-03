import '../globals.css';

import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import axios from 'axios';

import AppLayout from '@/layouts/AppLayout';

import spotifyService from '@/services/spotify.service';

import StoreProvider from '@/redux/StoreProvider';
import { preloadedAuthState } from '@/redux/slices/authSlice';
import { preloadedUserState } from '@/redux/slices/userSlice';

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

export default async function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookieStore = await cookies();
	const accessToken = cookieStore.get('access_token')?.value;
	let currentUser = null;

	if (!accessToken) {
		redirect('/login');
	}

	try {
		currentUser = await spotifyService.fetchCurrentUser(accessToken);
	} catch (error) {
		if (axios.isAxiosError(error) && error.response?.status === 403) {
			redirect('/unauthorised');
		}
		redirect('/login');
	}

	return (
		<StoreProvider
			preloadedState={{
				auth: preloadedAuthState(true),
				user: preloadedUserState(currentUser),
			}}
		>
			<AppLayout>{children}</AppLayout>
		</StoreProvider>
	);
}
