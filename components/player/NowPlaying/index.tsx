import React from 'react';

import { useAppSelector } from '@/redux/hooks';
import { getCurrentTrack } from '@/redux/slices/playerSlice';

const NowPlaying = () => {
	const currentTrack = useAppSelector(getCurrentTrack);

	if (!currentTrack) {
		return null;
	}

	return (
		<div className="flex items-center gap-3 overflow-hidden py-3">
			<div
				className="h-full bg-cover bg-center aspect-square bg-black rounded-md"
				style={{
					backgroundImage: `url(${currentTrack.album.images[0].url})`,
				}}
			></div>
			<div className="flex flex-col truncate">
				<span className="leading-5 truncate font-funnel font-medium text-white text-base">
					{currentTrack.name}
				</span>
				<span className="font-funnel truncate text-neutral-400 text-sm">
					{currentTrack.artists[0].name}
				</span>
			</div>
		</div>
	);
};

export default NowPlaying;
