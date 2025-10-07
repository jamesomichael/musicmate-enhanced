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

const PlayerControls = () => {
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
			<ProgressBar />
		</div>
	);
};

export default PlayerControls;
