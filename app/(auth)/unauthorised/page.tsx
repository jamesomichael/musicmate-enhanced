'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { MdMail } from 'react-icons/md';

import { BACKGROUND_IMAGES } from '@/constants/backgrounds';

import useLogOut from '@/hooks/useLogOut';

import Button from '@/components/shared/Button';
import Logo from '@/components/shared/Logo';
import Loader from '@/components/shared/Loader';

interface BackgroundImage {
	url: string;
	attribution: {
		name: string;
		url: string;
	};
	opacity?: string;
}

const Unauthorised = () => {
	const logOut = useLogOut();
	const [backgroundImage, setBackgroundImage] =
		useState<BackgroundImage | null>(null);

	useEffect(() => {
		const randomImage =
			BACKGROUND_IMAGES[
				Math.floor(Math.random() * BACKGROUND_IMAGES.length)
			];
		setBackgroundImage(randomImage);
	}, []);

	return !backgroundImage ? (
		<div className="h-full bg-spotify-black">
			<Loader />
		</div>
	) : (
		<div className="relative flex justify-center items-center h-full">
			<div
				className="blur-xs absolute inset-0 grayscale bg-cover bg-center opacity-40"
				style={{
					backgroundImage: `url(${backgroundImage.url})`,
				}}
			></div>
			<span className="absolute bottom-4 w-full text-center md:text-right px-4 text-xs font-funnel text-neutral-400 z-50 opacity-40">
				Background image courtesy of&nbsp;
				<Link
					href={backgroundImage.attribution.url}
					target="_blank"
					className="hover:underline hover:text-neutral-300"
				>
					{backgroundImage.attribution.name}
				</Link>
			</span>
			<div
				className={`absolute inset-0 ${
					backgroundImage.opacity || 'bg-black/40'
				}`}
			></div>
			<div className="relative flex justify-center items-center bg-black w-full sm:w-auto rounded-md px-10 py-8">
				<div className="text-center flex flex-col items-center gap-3">
					<Logo className="text-xl lg:text-2xl leading-none" />
					<span className="py-1 font-funnel font-bold text-2xl sm:text-3xl text-white">
						Thanks for your interest!
					</span>
					<span className="font-funnel text-sm text-neutral-200">
						Unfortunately, you are not currently authorised to
						access musicmate.
					</span>
					<Link
						href="mailto:musicmate@jamesmichael.dev?subject=Access%20Request"
						className="font-funnel text-sm sm:text-base font-bold text-spotify-green hover:underline flex items-center gap-1.5"
					>
						<MdMail className="text-xl sm:text-2xl" />
						Please get in touch to request access.
					</Link>
					<Button onClick={logOut} text="Log out" className="my-2" />
				</div>
			</div>
		</div>
	);
};

export default Unauthorised;
