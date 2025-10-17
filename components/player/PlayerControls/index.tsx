import React from 'react';

import {
	FaCirclePause,
	FaCirclePlay,
	FaBackwardStep,
	FaForwardStep,
} from 'react-icons/fa6';
import { PiRepeatOnceBold, PiRepeatBold, PiShuffleBold } from 'react-icons/pi';

import ProgressBar from '../ProgressBar';
import ControlIcon from '../../shared/ControlIcon';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import {
	fetchPlaybackState,
	getNowPlaying,
	pause,
	resume,
	seek,
	setShuffleState,
	setRepeatState,
	skipToNext,
	skipToPrevious,
} from '@/redux/slices/playerSlice';

import type { SpotifyRepeatState } from '@/types/spotify';

const PlayerControls = () => {
	const { isPlaying, isExternal, device, repeatState, shuffleState } =
		useAppSelector(getNowPlaying);
	const dispatch = useAppDispatch();

	const handlePause = () => {
		dispatch(pause(device.id));
	};

	const handleResume = () => {
		dispatch(resume(device.id));
	};

	const handleSeek = (position: number) => {
		dispatch(seek(position));
	};

	const handleSkipToNext = async () => {
		await dispatch(skipToNext());
		if (isExternal) {
			setTimeout(() => dispatch(fetchPlaybackState()), 500);
		}
	};

	const handleSkipToPrevious = async () => {
		await dispatch(skipToPrevious());
		if (isExternal) {
			setTimeout(() => dispatch(fetchPlaybackState()), 500);
		}
	};

	const toggleShuffle = () => dispatch(setShuffleState(!shuffleState));

	const toggleRepeat = () => {
		let nextState: SpotifyRepeatState;

		switch (repeatState) {
			case 'off':
				nextState = 'context';
				break;
			case 'context':
				nextState = 'track';
				break;
			case 'track':
				nextState = 'off';
				break;
			default:
				nextState = 'off';
				break;
		}

		dispatch(setRepeatState(nextState));
	};

	return (
		<div className="flex flex-col gap-2 justify-center items-center">
			<div className="flex items-center gap-6">
				<ControlIcon
					title={`${shuffleState ? 'Disable' : 'Enable'} shuffle`}
					onClick={toggleShuffle}
					isActive={shuffleState}
					Icon={PiShuffleBold}
				/>
				<ControlIcon
					title="Previous"
					onClick={handleSkipToPrevious}
					Icon={FaBackwardStep}
				/>
				<ControlIcon
					title={isPlaying ? 'Pause' : 'Play'}
					onClick={isPlaying ? handlePause : handleResume}
					Icon={isPlaying ? FaCirclePause : FaCirclePlay}
					isPrimary={true}
				/>
				<ControlIcon
					title="Next"
					onClick={handleSkipToNext}
					Icon={FaForwardStep}
				/>
				<ControlIcon
					title={`${
						repeatState === 'track' ? 'Disable' : 'Enable'
					} repeat${repeatState === 'context' ? ' one' : ''}`}
					onClick={toggleRepeat}
					isActive={repeatState !== 'off'}
					Icon={
						repeatState === 'track'
							? PiRepeatOnceBold
							: PiRepeatBold
					}
				/>
			</div>
			<ProgressBar onSeek={handleSeek} />
		</div>
	);
};

export default PlayerControls;
