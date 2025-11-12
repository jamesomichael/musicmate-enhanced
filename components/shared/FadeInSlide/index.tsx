'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

const FadeInSlide = ({
	children,
	className,
	href,
	delay = 0,
	duration = 0.5,
	x = 40,
	y = 0,
	onClick,
	...props
}: {
	children: React.ReactNode;
	className?: string;
	href?: string;
	delay?: number;
	duration?: number;
	x?: number;
	y?: number;
	onClick?: () => void;
}) => {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, x, y }}
			animate={{ opacity: 1, x: 0, y: 0 }}
			transition={{ duration, delay }}
			onClick={onClick}
			{...props}
		>
			{href ? (
				<Link className="hover:underline" href={href}>
					{children}
				</Link>
			) : (
				children
			)}
		</motion.div>
	);
};

export default FadeInSlide;
