'use client';
import React from 'react';

import NowPlaying from '../NowPlaying';
import PlayerControls from '../PlayerControls';
import PlayerExtras from '../PlayerExtras';

import usePlayer from '@/hooks/usePlayer';

import { useAppSelector } from '@/redux/hooks';
import { getCurrentTrack } from '@/redux/slices/playerSlice';
import ExternalDeviceIndicator from '../ExternalDeviceIndicator';

const PlayerContainer = ({ accessToken }: { accessToken: string }) => {
	usePlayer(accessToken);

	// const playbackState = useAppSelector((state) => state.player.playbackState);
	// const currentTrack = useAppSelector(getCurrentTrack);

	// if (!currentTrack) {
	// 	return null;
	// }

	return (
		<div className="flex flex-col">
			<div className="grid grid-cols-3 h-20 px-3">
				<NowPlaying />
				<PlayerControls />
				<PlayerExtras />
			</div>
			{true && <ExternalDeviceIndicator />}
		</div>
	);
};

export default PlayerContainer;
