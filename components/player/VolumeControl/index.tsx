import React, { useState } from 'react';

import { FaVolumeHigh } from 'react-icons/fa6';

import SeekBar from '@/components/player/SeekBar';

const VolumeControl = () => {
	const [volume, setVolume] = useState(10);

	const changeVolume = (value: number) => {
		setVolume(value);
	};

	return (
		<div className="flex items-center gap-2">
			<FaVolumeHigh className="cursor-pointer text-neutral-300 hover:text-white" />
			<SeekBar
				duration={10}
				position={volume}
				width={100}
				fullWidth={false}
				onSeek={changeVolume}
			/>
		</div>
	);
};

export default VolumeControl;
