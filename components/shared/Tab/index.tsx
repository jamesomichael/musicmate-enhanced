import React from 'react';

const Tab = ({
	onClick,
	label,
	isActive = false,
}: {
	onClick: () => void;
	label: string;
	isActive?: boolean;
}) => {
	return (
		<div
			onClick={onClick}
			className={`${
				isActive
					? 'bg-white'
					: 'hover:cursor-pointer hover:bg-neutral-600 bg-neutral-700'
			} transition-all duration-150 rounded-full px-3 py-2 flex items-center whitespace-nowrap`}
		>
			<span
				className={`${
					isActive ? 'text-black font-medium' : 'text-white'
				} leading-none text-sm font-funnel`}
			>
				{label}
			</span>
		</div>
	);
};

export default Tab;
