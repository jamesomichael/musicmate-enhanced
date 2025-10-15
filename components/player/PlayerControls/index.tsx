import React from 'react';

import {
	FaShuffle,
	FaRepeat,
	FaCirclePause,
	FaCirclePlay,
	FaBackwardStep,
	FaForwardStep,
} from 'react-icons/fa6';

import ProgressBar from '../ProgressBar';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { getNowPlaying, pause, resume, seek } from '@/redux/slices/playerSlice';

const PlayerControls = () => {
	const { isPlaying, device } = useAppSelector(getNowPlaying);
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

	return (
		<div className="flex flex-col gap-2 justify-center items-center">
			<div className="flex items-center gap-6">
				<div>
					<FaShuffle className="cursor-pointer text-neutral-300 hover:text-white" />
				</div>
				<div>
					<FaBackwardStep
						className="cursor-pointer text-neutral-300 hover:text-white"
						size={20}
					/>
				</div>
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
				{/* </div> */}
				<div>
					<div
					// onClick={handleNextTrack}
					>
						<FaForwardStep
							className="cursor-pointer text-gray-300 hover:text-white"
							size={20}
						/>
					</div>
				</div>
				<div>
					<FaRepeat className="cursor-pointer text-neutral-300 hover:text-white" />
				</div>
			</div>
			<ProgressBar onSeek={handleSeek} />
		</div>
	);
};

export default PlayerControls;
