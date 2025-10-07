'use client';
import React from 'react';

import { FaVolumeHigh } from 'react-icons/fa6';

import PlayerControls from '../PlayerControls';
import SeekBar from '@/components/player/SeekBar';

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
		<div className="flex flex-col">
			<div className="grid grid-cols-3 h-20 px-3">
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
				<PlayerControls />
				<div className="flex justify-end items-center">
					<div className="flex items-center gap-2">
						<FaVolumeHigh className="cursor-pointer text-neutral-300 hover:text-white" />
						<SeekBar
							duration={1}
							position={0.85}
							width={100}
							fullWidth={false}
						/>
					</div>
				</div>
			</div>
			{true && (
				<div className="px-2 bg-spotify-green h-6 flex gap-2 justify-end items-center rounded">
					<FaVolumeHigh />
					<span className="font-funnel font-bold text-sm">
						Playing on TEST
					</span>
				</div>
			)}
		</div>
	);
};

export default PlayerContainer;
