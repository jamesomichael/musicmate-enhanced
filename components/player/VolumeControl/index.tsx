import React, { useState, useEffect } from 'react';

import { FaVolumeXmark, FaVolumeLow, FaVolumeHigh } from 'react-icons/fa6';

import SeekBar from '@/components/shared/SeekBar';
import VolumeIcon from './VolumeIcon';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setVolume } from '@/redux/slices/playerSlice';
import { getNowPlaying } from '@/redux/slices/playerSlice';

const VolumeControl = () => {
	const dispatch = useAppDispatch();
	const {
		device: { supports_volume: isSupported, volume_percent: volumePercent },
	} = useAppSelector(getNowPlaying);

	const [value, setValue] = useState(volumePercent || 100);
	const [previousValue, setPreviousValue] = useState(null);
	const [isMuted, setIsMuted] = useState(volumePercent === 0);

	useEffect(() => {
		setValue(volumePercent);
		setIsMuted(volumePercent === 0);
	}, [volumePercent]);

	const changeVolume = (value: number) => {
		setValue(value);
		dispatch(setVolume(value));
	};

	const toggleMute = () => {
		if (!isMuted) {
			setPreviousValue(value);
			setValue(0);
			setIsMuted(true);
			dispatch(setVolume(0));
		} else {
			const updatedValue = previousValue ?? 100;
			setValue(updatedValue);
			setIsMuted(false);
			dispatch(setVolume(updatedValue));
		}
	};

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
