import React from 'react';

import { FaVolumeHigh } from 'react-icons/fa6';

import { useAppSelector } from '@/redux/hooks';
import { getNowPlaying } from '@/redux/slices/playerSlice';

const ExternalDeviceIndicator = () => {
	const { device } = useAppSelector(getNowPlaying);

	return (
		<div className="px-2 bg-spotify-green h-6 flex gap-2 justify-end items-center rounded">
			<FaVolumeHigh />
			<span className="font-funnel font-bold text-sm">
				Playing on {device.name}
			</span>
		</div>
	);
};

export default ExternalDeviceIndicator;
