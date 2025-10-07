import React, { useState } from 'react';

import {
	FaShuffle,
	FaRepeat,
	FaCirclePause,
	FaCirclePlay,
	FaBackwardStep,
	FaForwardStep,
	FaVolumeHigh,
} from 'react-icons/fa6';

import SeekBar from '@/components/player/SeekBar';

const PlayerControls = () => {
	const [position, setPosition] = useState(0);
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
				<div>
					<FaCirclePlay
						className="cursor-pointer text-white hover:scale-105 hover:opacity-90"
						// onClick={handlePlayPause}
						size={35}
					/>
				</div>
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
			<div className="flex justify-center items-center gap-2 w-full">
				<span className="font-funnel text-xs text-neutral-300">
					1:15
					{/* {dayjs.duration(progress, 'milliseconds').format('m:ss')} */}
				</span>
				<SeekBar
					duration={10}
					position={position}
					onSeek={(e) => {
						setPosition(e);
					}}
				/>
				<span className="font-funnel text-xs text-neutral-300">
					3:00
					{/* {dayjs.duration(progress, 'milliseconds').format('m:ss')} */}
				</span>
				{/**
				  * 
				  * 
				<div className="progress-bar-container w-full">
					<input
						type="range"
						min="0"
						// max={duration}
						// value={progress}
						// onChange={
						// 	playbackState.device.id === deviceId
						// 		? handleSeek
						// 		: () => {}
						// }
						// className={`progress-bar ${
						// 	playbackState.device.id !== deviceId &&
						// 	'opacity-50 cursor-not-allowed'
						// }`}
					/>
				</div>
				<span className="font-copy text-xs text-gray-300">
					3:00
					{/* {dayjs.duration(duration, 'milliseconds').format('m:ss')} 
				</span>
				  * 
				  */}
			</div>
		</div>
	);
};

export default PlayerControls;
