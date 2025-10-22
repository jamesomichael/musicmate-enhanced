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

import usePlayerControls from '@/hooks/usePlayerControls';

const PlayerControls = () => {
	const {
		isPlaying,
		repeatState,
		shuffleState,
		pause,
		resume,
		seek,
		skipToNext,
		skipToPrevious,
		toggleShuffle,
		toggleRepeat,
	} = usePlayerControls();

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
					onClick={skipToPrevious}
					Icon={FaBackwardStep}
				/>
				<ControlIcon
					title={isPlaying ? 'Pause' : 'Play'}
					onClick={isPlaying ? pause : resume}
					Icon={isPlaying ? FaCirclePause : FaCirclePlay}
					isPrimary={true}
				/>
				<ControlIcon
					title="Next"
					onClick={skipToNext}
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
			<ProgressBar onSeek={seek} />
		</div>
	);
};

export default PlayerControls;
