import React from 'react';
import Link from 'next/link';

interface ButtonProps {
	className?: string;
	text: string;
	href?: string;
	isPrimary?: boolean;
	onClick?: () => void;
}

const Button = ({
	className = '',
	isPrimary = false,
	text,
	href,
	onClick,
}: ButtonProps) => {
	const classes = `hover:scale-105 transition-all duration-200 font-funnel font-bold text-sm px-10 py-3 text-black rounded-full ${
		isPrimary ? 'bg-spotify-green hover:bg-green-400' : 'bg-white'
	}`;
	return href ? (
		<Link href={href} className={`${classes} ${className}`}>
			{text}
		</Link>
	) : (
		<button
			onClick={onClick}
			className={`hover:cursor-pointer ${classes} ${className}`}
		>
			{text}
		</button>
	);
};

export default Button;
