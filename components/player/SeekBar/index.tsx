import React from 'react';

import { Seekbar } from 'react-seekbar';

const SeekBar = ({
	height = 4,
	width,
	duration,
	position,
	fullWidth = true,
	onSeek,
}: {
	height?: number;
	width?: number;
	duration: number;
	position: number;
	fullWidth?: boolean;
	onSeek: (position: number) => void;
}) => {
	return (
		<Seekbar
			fullWidth={fullWidth}
			width={width}
			height={height}
			duration={duration}
			position={position}
			innerColor="#ffffff"
			outerColor="#ffffff4d"
			hoverColor="#1ed760"
			onSeek={onSeek}
		/>
	);
};

export default SeekBar;
