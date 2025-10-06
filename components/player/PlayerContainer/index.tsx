'use client';
import React from 'react';

import usePlayer from '@/hooks/usePlayer';

import { useAppSelector } from '@/redux/hooks';
import { getCurrentTrack } from '@/redux/slices/playerSlice';

const PlayerContainer = ({ accessToken }: { accessToken: string }) => {
	usePlayer(accessToken);

	// const playbackState = useAppSelector((state) => state.player.playbackState);
	const currentTrack = useAppSelector(getCurrentTrack);

	if (!currentTrack) {
		return null;
	}

	return (
		<div className="bg-neutral-700 h-16">
			<div className="grid grid-cols-[1fr_2fr_1fr] h-full">
				<div className="flex items-center gap-2 p-2">
					<div
						className="h-full bg-cover bg-center aspect-square bg-black rounded-md"
						style={{
							backgroundImage: `url(${currentTrack.album.images[0].url})`,
						}}
					></div>
					<div className="flex flex-col">
						<span className="leading-5 font-funnel font-medium text-white text-sm">
							{currentTrack.name}
						</span>
						<span className="font-funnel text-neutral-400 text-xs">
							{currentTrack.artists[0].name}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlayerContainer;
