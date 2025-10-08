'use client';
import React from 'react';

import NowPlaying from '../NowPlaying';
import PlayerControls from '../PlayerControls';
import PlayerExtras from '../PlayerExtras';
import ExternalDeviceIndicator from '../ExternalDeviceIndicator';

import usePlayer from '@/hooks/usePlayer';

import { useAppSelector } from '@/redux/hooks';
import { getNowPlaying } from '@/redux/slices/playerSlice';

const PlayerContainer = ({ accessToken }: { accessToken: string }) => {
	usePlayer(accessToken);

	const { isPlaying = false, isExternal = false } =
		useAppSelector(getNowPlaying);

	if (!isPlaying) {
		return null;
	}

	return (
		<div className="flex flex-col">
			<div className="grid grid-cols-3 h-20 px-3">
				<NowPlaying />
				<PlayerControls />
				<PlayerExtras />
			</div>
			{isExternal && <ExternalDeviceIndicator />}
		</div>
	);
};

export default PlayerContainer;
