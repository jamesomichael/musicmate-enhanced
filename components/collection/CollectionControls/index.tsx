'use client';
import React from 'react';

import { FaCirclePause, FaCirclePlay } from 'react-icons/fa6';
import { PiShuffleBold } from 'react-icons/pi';

import ControlIcon from '@/components/shared/ControlIcon';

import useCollectionPlayback from '@/hooks/useCollectionPlayback';

const CollectionControls = ({ contextUri }: { contextUri: string }) => {
	const {
		isPlayingCollection,
		isActiveCollection,
		shuffleState,
		play,
		pause,
		toggleShuffle,
	} = useCollectionPlayback(contextUri);

	return (
		<div className={'flex items-center gap-4 md:gap-6'}>
			<ControlIcon
				title={isPlayingCollection ? 'Pause' : 'Play'}
				onClick={isPlayingCollection ? pause : play}
				Icon={isPlayingCollection ? FaCirclePause : FaCirclePlay}
				inactiveClassName="text-spotify-green"
				size="w-12 h-12 md:w-16 md:h-16"
			/>
			<ControlIcon
				title={`${shuffleState ? 'Disable' : 'Enable'} shuffle`}
				onClick={toggleShuffle}
				Icon={PiShuffleBold}
				size="w-7 h-7 md:w-10 md:h-10"
				activeClassName="text-spotify-green"
				inactiveClassName="text-neutral-400 hover:text-white"
				isActive={shuffleState && isActiveCollection}
			/>
		</div>
	);
};

export default CollectionControls;
