import React from 'react';

import type { IconType } from 'react-icons';

const ControlIcon = ({
	title,
	onClick,
	isActive = false,
	size,
	activeClassName = 'text-spotify-green',
	inactiveClassName = 'text-neutral-300 hover:text-white',
	primaryClassName = 'text-white hover:text-neutral-300',
	Icon,
	isPrimary = false,
}: {
	title: string;
	size?: string;
	activeClassName?: string;
	inactiveClassName?: string;
	primaryClassName?: string;
	onClick?: () => void;
	isActive?: boolean;
	isPrimary?: boolean;
	Icon: IconType;
}) => {
	return (
		<div
			title={title}
			className="group transition-all duration-200 hover:scale-105 active:scale-95 active:opacity-50 flex flex-col items-center justify-center relative"
			onClick={onClick}
		>
			<Icon
				className={`cursor-pointer ${
					size ? size : isPrimary ? 'w-9 h-9' : 'w-5 h-5'
				} ${
					isActive
						? activeClassName
						: isPrimary
						? primaryClassName
						: inactiveClassName
				}`}
			/>
			{isActive && (
				<div className="absolute -bottom-1.5 bg-spotify-green h-1 w-1 rounded-full"></div>
			)}
		</div>
	);
};

export default ControlIcon;
