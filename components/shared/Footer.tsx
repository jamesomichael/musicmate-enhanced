import React from 'react';
import Link from 'next/link';

import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

import Logo from './Logo';

const Footer = () => {
	return (
		<div className="grid grid-rows-2 gap-8 sm:gap-0 sm:grid-rows-none sm:grid-cols-2 pb-44 py-10 bg-black">
			<div className="grid grid-rows-2 sm:h-full m-auto">
				<Logo
					className="h-10 text-lg flex justify-center sm:justify-start items-center"
					light={true}
				/>
				<span className="font-unbounded text-xs text-neutral-300 flex justify-center sm:justify-start items-center">
					&copy; James Michael, {new Date().getFullYear()}
				</span>
			</div>
			<div className="grid grid-rows-2 sm:h-full m-auto">
				<div className="h-10 flex gap-10 text-neutral-300 justify-center sm:justify-end items-center">
					<Link
						href="https://github.com/jamesomichael"
						target="_blank"
						className="hover:text-spotify-green"
					>
						<FaGithub size={30} />
					</Link>
					<Link
						href="https://linkedin.com/in/jamesm94"
						target="_blank"
						className="hover:text-spotify-green"
					>
						<FaLinkedin size={30} />
					</Link>
					<Link
						href="mailto:hello@jamesmichael.dev"
						className="hover:text-spotify-green"
					>
						<IoMdMail size={30} />
					</Link>
				</div>
				<div className="font-unbounded text-neutral-300 text-xs flex justify-center sm:justify-end items-center">
					<Link
						href="https://jamesmichael.dev"
						target="_blank"
						className="hover:text-spotify-green"
					>
						jamesmichael.dev
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
