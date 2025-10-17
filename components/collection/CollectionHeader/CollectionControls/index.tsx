'use client';
import React, { useCallback } from 'react';

import { FaCirclePause, FaCirclePlay } from 'react-icons/fa6';
import { PiShuffleBold } from 'react-icons/pi';

import ControlIcon from '@/components/shared/ControlIcon';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import {
	fetchPlaybackState,
	getNowPlaying,
	play,
	pause,
	resume,
	setShuffleState,
} from '@/redux/slices/playerSlice';

const CollectionControls = ({ contextUri }: { contextUri: string }) => {
	const { isPlaying, isActive, isExternal, shuffleState, context, device } =
		useAppSelector(getNowPlaying);
	const { deviceId: localDeviceId } = useAppSelector((state) => state.player);
	const dispatch = useAppDispatch();

	const deviceId = device?.id ?? localDeviceId;

	const isCurrentContext = context?.uri === contextUri;
	const isPlayingCollection = isPlaying && isCurrentContext;
	const isActiveCollection = isActive && isCurrentContext;

	const handlePlay = useCallback(async () => {
		if (isActiveCollection) {
			await dispatch(resume(deviceId));
		} else {
			await dispatch(
				play({
					deviceId,
					contextUri,
					offset: { position: 0 },
				})
			);
		}
		if (isExternal) {
			setTimeout(() => dispatch(fetchPlaybackState()), 500);
		}
	}, [isActiveCollection, deviceId, contextUri, isExternal, dispatch]);

	const handlePause = useCallback(
		() => dispatch(pause(deviceId)),
		[deviceId, dispatch]
	);

	const toggleShuffle = useCallback(
		() => dispatch(setShuffleState(!shuffleState)),
		[shuffleState, dispatch]
	);

	return (
		<div className="relative h-24 flex items-center gap-6 bg-gradient-to-b from-black/40 to-spotify-black px-8 py-4">
			<ControlIcon
				title={isPlayingCollection ? 'Pause' : 'Play'}
				onClick={isPlayingCollection ? handlePause : handlePlay}
				Icon={isPlayingCollection ? FaCirclePause : FaCirclePlay}
				inactiveClassName="text-spotify-green"
				size="w-16 h-16"
			/>
			<ControlIcon
				title={`${shuffleState ? 'Disable' : 'Enable'} shuffle`}
				onClick={toggleShuffle}
				Icon={PiShuffleBold}
				size="w-10 h-10"
				activeClassName="text-spotify-green"
				inactiveClassName="text-neutral-400 hover:text-white"
				isActive={shuffleState && isActiveCollection}
			/>
		</div>
	);
};

export default CollectionControls;
