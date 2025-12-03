import React from 'react';
import Link from 'next/link';

interface Props {
	label: string;
	href?: string;
	onClick?: () => void;
	Icon?: React.ComponentType<{ size: number }>;
	iconSize?: number;
	openInNewTab?: boolean;
}

const AccountMenuItem = ({
	label,
	href,
	onClick,
	Icon,
	iconSize = 20,
	openInNewTab,
}: Props) => {
	const labelClasses = 'font-funnel text-sm text-white';
	return (
		<div
			className={`pl-2.5 pr-1.5 h-11 w-full flex items-center rounded-md hover:bg-neutral-600 ${
				href ? 'cursor-pointer' : ''
			}`}
			onClick={onClick}
		>
			{href ? (
				<Link
					href={href}
					target={openInNewTab ? '_blank' : '_self'}
					className="w-full flex justify-between items-center"
				>
					<span className={labelClasses}>{label}</span>
					{Icon && (
						<div className="text-white">
							<Icon size={iconSize} />
						</div>
					)}
				</Link>
			) : (
				<span className={labelClasses}>{label}</span>
			)}
		</div>
	);
};

export default AccountMenuItem;
