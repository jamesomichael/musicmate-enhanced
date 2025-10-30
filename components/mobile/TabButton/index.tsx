'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TabButton = ({
	href,
	title,
	ActiveIcon,
	InactiveIcon,
}: {
	href: string;
	title: string;
	ActiveIcon: React.ComponentType<{ className?: string }>;
	InactiveIcon: React.ComponentType<{ className?: string }>;
}) => {
	const pathname = usePathname();
	const isCurrentPage = pathname === href;

	return (
		<Link
			href={href}
			className={`active:scale-95 transition-all duration-150 flex flex-col gap-1 items-center justify-center ${
				isCurrentPage ? 'text-white font-medium' : 'text-neutral-400'
			}`}
		>
			{isCurrentPage ? (
				<ActiveIcon className="h-7 w-7" />
			) : (
				<InactiveIcon className="h-7 w-7" />
			)}
			<span className="font-funnel text-xs">{title}</span>
		</Link>
	);
};

export default TabButton;
