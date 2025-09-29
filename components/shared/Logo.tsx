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
					? 'text-white'
					: dark
					? 'text-black'
					: 'text-spotify-green'
			} ${className}`}
		>
			music
			<span
				className={`font-extralight ${
					dark ? 'text-black' : 'text-white'
				} ${className}`}
			>
				mate
			</span>
		</span>
	);
};

export default Logo;
