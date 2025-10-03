'use client';
import React from 'react';
import Link from 'next/link';

import { MdMail } from 'react-icons/md';

import useLogOut from '@/hooks/useLogOut';

import Button from '@/components/shared/Button';
import Logo from '@/components/shared/Logo';

const Unauthorised = () => {
	const logOut = useLogOut();

	return (
		<div className="relative flex justify-center items-center h-full bg-spotify-black">
			<div
				className="absolute inset-0 grayscale bg-cover bg-bottom opacity-40"
				style={{
					backgroundImage: `url(https://images.unsplash.com/photo-1488036106564-87ecb155bb15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
				}}
			></div>
			<span className="absolute bottom-4 w-full text-center md:text-right px-4 text-xs font-funnel text-neutral-400 z-50 opacity-40">
				Background image courtesy of&nbsp;
				<Link
					href="https://unsplash.com/photos/people-watching-concert-wnX-fXzB6Cw?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
					target="_blank"
					className="hover:underline hover:text-neutral-300"
				>
					Aaron Paul
				</Link>
			</span>
			<div className="absolute inset-0 bg-black opacity-60 md:opacity-55"></div>
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
