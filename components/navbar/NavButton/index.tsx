'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
	href: string;
	title: string;
	ActiveIcon: React.ComponentType<{ size?: number }>;
	InactiveIcon: React.ComponentType<{ size?: number }>;
	iconSize?: number;
}

const NavButton = ({
	href,
	title,
	ActiveIcon,
	InactiveIcon,
	iconSize = 22,
}: Props) => {
	const pathname = usePathname();
	const isCurrentPage = pathname === href;

	return (
		<Link
			href={href}
			title={title}
			className={`h-full aspect-square rounded-full bg-neutral-800 flex justify-center items-center hover:scale-105 transition-all duration-200 ${
				isCurrentPage ? 'text-white' : 'text-neutral-400'
			}`}
		>
			{isCurrentPage ? (
				<ActiveIcon size={iconSize} />
			) : (
				<InactiveIcon size={iconSize} />
			)}
		</Link>
	);
};

export default NavButton;
