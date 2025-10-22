import React from 'react';

import { FaVolumeXmark, FaVolumeLow, FaVolumeHigh } from 'react-icons/fa6';

import SeekBar from '@/components/shared/SeekBar';
import VolumeIcon from './VolumeIcon';

import useVolumeControl from '@/hooks/useVolumeControl';

const VolumeControl = () => {
	const { isSupported, isMuted, value, changeVolume, toggleMute } =
		useVolumeControl();

	return (
		<div
			className={`flex items-center gap-2.5 ${
				!isSupported ? 'opacity-40 pointer-events-none' : ''
			}`}
		>
			<VolumeIcon
				title={isMuted ? 'Unmute' : 'Mute'}
				onClick={toggleMute}
				Icon={
					isMuted
						? FaVolumeXmark
						: value < 50
						? FaVolumeLow
						: FaVolumeHigh
				}
			/>
			<SeekBar
				duration={100}
				position={value}
				width={100}
				fullWidth={false}
				onSeek={changeVolume}
			/>
		</div>
	);
};

export default VolumeControl;
