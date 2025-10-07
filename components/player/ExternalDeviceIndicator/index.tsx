import React from 'react';

import { FaVolumeHigh } from 'react-icons/fa6';

const ExternalDeviceIndicator = () => {
	return (
		<div className="px-2 bg-spotify-green h-6 flex gap-2 justify-end items-center rounded">
			<FaVolumeHigh />
			<span className="font-funnel font-bold text-sm">
				Playing on TEST
			</span>
		</div>
	);
};

export default ExternalDeviceIndicator;
