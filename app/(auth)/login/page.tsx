import React from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';

import Logo from '@/components/shared/Logo';

// import spotifyService from '@/services/spotify';
import { SPOTIFY_SCOPES } from '@/constants/auth';
import Button from '@/components/shared/Button';

const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID!;
const SPOTIFY_REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI!;
const SPOTIFY_AUTH_URL = process.env.NEXT_PUBLIC_SPOTIFY_AUTH_URL!;

const authUrl = `${SPOTIFY_AUTH_URL}?response_type=code&client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${encodeURIComponent(
	SPOTIFY_REDIRECT_URI
)}&scope=${encodeURIComponent(SPOTIFY_SCOPES.join(' '))}`;

const Login = async () => {
	// const cookieStore = await cookies();
	// const accessToken = cookieStore.get('access_token')?.value;

	// if (accessToken) {
	// 	const user = await spotifyService.fetchCurrentUser(accessToken);
	// 	if (user) {
	// 		redirect('/');
	// 	}
	// }

	return (
		<div className="h-full flex items-center relative">
			<div
				className="absolute inset-0 grayscale bg-cover bg-center opacity-40"
				style={{
					backgroundImage:
						'url(https://images.unsplash.com/photo-1450044804117-534ccd6e6a3a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
				}}
			></div>
			<span className="absolute bottom-4 w-full text-center md:text-right px-4 text-xs font-funnel text-neutral-400 z-50 opacity-40">
				Background image courtesy of&nbsp;
				<Link
					href="https://unsplash.com/@shmabbss?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
					target="_blank"
					className="hover:underline hover:text-neutral-300"
				>
					Abigail Lynn
				</Link>
			</span>
			<div className="absolute inset-0 bg-black opacity-60 md:opacity-55"></div>

			<div className="relative z-10 py-4 md:py-0 flex gap-4 w-full h-full md:px-8 flex-col md:flex-row justify-start md:justify-between items-center">
				<div className="flex-1 order-2 md:order-1 flex flex-col justify-center items-center md:items-start gap-3 w-auto">
					<span className="font-funnel font-black text-white text-4xl lg:text-5xl">
						Welcome back
					</span>
					<Button
						href={authUrl}
						isPrimary={true}
						text="Log in with Spotify"
					/>
				</div>
				<div className="order-1 md:order-2">
					<Logo className="text-xl sm:text-2xl md:text-4xl lg:text-5xl" />
				</div>
			</div>
		</div>
	);
};

export default Login;
