import React from 'react';
import Link from 'next/link';

import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

import Logo from '../Logo';

const Footer = () => {
	return (
		<div className="grid grid-rows-[auto_auto] gap-6 md:gap-0 pb-44 py-10 xl:max-w-screen-xl 2xl:max-w-screen-2xl px-8 md:px-14 2xl:px-8 mx-auto">
			<div className="grid grid-cols-none grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-6 md:gap-44">
				<Logo
					className="h-10 text-lg lg:text-xl flex justify-center md:justify-start items-center"
					light={true}
				/>
				<div className="h-10 flex gap-8 sm:gap-10 text-neutral-500 justify-center md:justify-end items-center">
					<Link
						href="https://jamesmichael.dev"
						title="Portfolio '25"
						className="group font-georama text-2xl sm:text-[1.8rem]"
						target="_blank"
					>
						<span className="transition-all duration-150 group-hover:text-white font-stretch-110% font-extralight">
							J
						</span>
						<span className="transition-all duration-150 group-hover:text-orange-200 font-stretch-[130%] font-extrabold">
							M
						</span>
					</Link>
					<Link
						href="https://github.com/jamesomichael"
						target="_blank"
						title="GitHub"
						className="transition-all duration-150 hover:text-white"
					>
						<FaGithub size={30} />
					</Link>
					<Link
						href="https://linkedin.com/in/jamesm94"
						target="_blank"
						title="LinkedIn"
						className="transition-all duration-150 hover:text-white"
					>
						<FaLinkedin size={30} />
					</Link>
					<Link
						href="mailto:hello@jamesmichael.dev"
						title="Email"
						className="transition-all duration-150 hover:text-white"
					>
						<IoMdMail size={30} />
					</Link>
				</div>
			</div>
			<div className="h-fit flex justify-center md:justify-start items-center">
				<span className="py-2 md:py-6 font-funnel text-xs sm:text-sm text-neutral-500">
					&copy; James Michael, {new Date().getFullYear()}
				</span>
			</div>
		</div>
	);
};

export default Footer;
