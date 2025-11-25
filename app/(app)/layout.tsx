import '../globals.css';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import axios from 'axios';

import AppLayout from '@/layouts/AppLayout';

import { fetchCurrentUser } from '@/services/spotify';

import StoreProvider from '@/redux/StoreProvider';
import { preloadedAuthState } from '@/redux/slices/authSlice';
import { preloadedUserState } from '@/redux/slices/userSlice';

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
		currentUser = await fetchCurrentUser(accessToken);
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
