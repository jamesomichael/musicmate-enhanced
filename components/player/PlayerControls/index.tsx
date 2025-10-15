import React from 'react';

import {
	FaCirclePause,
	FaCirclePlay,
	FaBackwardStep,
	FaForwardStep,
} from 'react-icons/fa6';
import { PiRepeatOnceBold, PiRepeatBold, PiShuffleBold } from 'react-icons/pi';

import ProgressBar from '../ProgressBar';

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
import { SpotifyRepeatState } from '@/types/spotify';

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
				<div
					title={`${shuffleState ? 'Disable' : 'Enable'} shuffle`}
					className="group transition-all duration-200 hover:scale-105 active:scale-95 active:opacity-70 flex flex-col items-center justify-center relative"
					onClick={toggleShuffle}
				>
					<PiShuffleBold
						className={`cursor-pointer w-5 h-5 ${
							shuffleState
								? 'text-spotify-green'
								: 'text-neutral-300 hover:text-white'
						}`}
					/>
					{shuffleState && (
						<div className="absolute -bottom-1.5 bg-spotify-green h-1 w-1 rounded-full"></div>
					)}
				</div>
				<FaBackwardStep
					title="Previous"
					className="cursor-pointer w-5 h-5 text-neutral-300 hover:text-white active:scale-95 active:text-neutral-400"
					onClick={handleSkipToPrevious}
				/>
				{isPlaying ? (
					<FaCirclePause
						title="Pause"
						className="cursor-pointer w-9 h-9 text-white active:scale-95 active:text-neutral-300 hover:scale-105 hover:opacity-90"
						onClick={handlePause}
					/>
				) : (
					<FaCirclePlay
						title="Play"
						className="cursor-pointer w-9 h-9 text-white active:scale-95 active:text-neutral-300 hover:scale-105 hover:opacity-90"
						onClick={handleResume}
					/>
				)}
				<FaForwardStep
					title="Next"
					className="cursor-pointer w-5 h-5 text-neutral-300 hover:text-white active:scale-95 active:text-neutral-400"
					onClick={handleSkipToNext}
				/>
				<div
					title={`${
						repeatState === 'track' ? 'Disable' : 'Enable'
					} repeat${repeatState === 'context' ? ' one' : ''}`}
					className="group transition-all duration-200 hover:scale-105 active:scale-95 active:opacity-70 flex flex-col items-center justify-center relative"
					onClick={toggleRepeat}
				>
					{repeatState === 'track' ? (
						<PiRepeatOnceBold className="cursor-pointer w-5 h-5 text-spotify-green" />
					) : (
						<PiRepeatBold
							className={`cursor-pointer w-5 h-5 ${
								repeatState !== 'off'
									? 'text-spotify-green'
									: 'text-neutral-300 hover:text-white'
							}`}
						/>
					)}
					{repeatState !== 'off' && (
						<div className="absolute -bottom-1.5 bg-spotify-green h-1 w-1 rounded-full"></div>
					)}
				</div>
			</div>
			<ProgressBar onSeek={handleSeek} />
		</div>
	);
};

export default PlayerControls;
