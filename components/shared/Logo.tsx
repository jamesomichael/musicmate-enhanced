import React from 'react';

interface LogoProps {
	className?: string;
	light?: boolean;
	dark?: boolean;
}

const Logo = ({ className, light = false, dark = false }: LogoProps) => {
	return (
		<span
			className={`select-none leading-none font-unbounded font-black ${
				light
					? 'text-neutral-300'
					: dark
					? 'text-black'
					: 'text-spotify-green'
			} ${className}`}
		>
			music
			<span
				className={`font-extralight ${
					dark ? 'text-black' : 'text-neutral-300'
				} ${className}`}
			>
				mate
			</span>
		</span>
	);
};

export default Logo;
