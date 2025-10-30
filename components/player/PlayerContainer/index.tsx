'use client';
import React from 'react';

import NowPlaying from '../NowPlaying';
import PlayerControls from '../PlayerControls';
import PlayerExtras from '../PlayerExtras';
import ExternalDeviceIndicator from '../ExternalDeviceIndicator';

import usePlayer from '@/hooks/usePlayer';

import { useAppSelector } from '@/redux/hooks';
import { getNowPlaying } from '@/redux/slices/playerSlice';

const PlayerContainer = () => {
	usePlayer();

	const {
		isPlaying = false,
		isExternal = false,
		isActive = false,
		isPrivate = false,
		isPodcast = false,
		item,
	} = useAppSelector(getNowPlaying);

	if ((!isPlaying && !isActive) || (isActive && !isPlaying && !item)) {
		return null;
	}

	return (
		<div className="flex flex-col">
			<div className="grid grid-cols-3 h-20 px-3">
				<NowPlaying />
				{!isPrivate && !isPodcast && (
					<>
						<PlayerControls />
						<PlayerExtras />
					</>
				)}
			</div>
			{isExternal && <ExternalDeviceIndicator />}
		</div>
	);
};

export default PlayerContainer;
