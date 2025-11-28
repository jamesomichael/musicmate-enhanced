import React from 'react';

import { FaVolumeXmark, FaVolumeLow, FaVolumeHigh } from 'react-icons/fa6';

import SeekBar from '@/components/shared/SeekBar';
import VolumeIcon from './VolumeIcon';

import useVolumeControl from '@/hooks/useVolumeControl';

import { useAppSelector } from '@/redux/hooks';
import { isUserPremium } from '@/redux/slices/userSlice';

const VolumeControl = () => {
	const { isSupported, isMuted, value, changeVolume, toggleMute } =
		useVolumeControl();
	const userHasPremium = useAppSelector(isUserPremium);

	return (
		<div
			className={`flex items-center gap-2.5 ${
				!isSupported || !userHasPremium
					? 'opacity-25 pointer-events-none cursor-not-allowed'
					: ''
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
