import React from 'react';

import type { IconType } from 'react-icons';

const VolumeIcon = ({
	title,
	onClick,
	Icon,
}: {
	title: string;
	onClick: () => void;
	Icon: IconType;
}) => {
	return (
		<Icon
			title={title}
			onClick={onClick}
			className="h-4 w-4 cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 active:opacity-50 text-neutral-300 hover:text-white"
		/>
	);
};

export default VolumeIcon;
