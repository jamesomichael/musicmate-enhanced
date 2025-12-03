import React from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

import SeekBar from '@/components/shared/SeekBar';

import useProgress from '@/hooks/player/useProgress';

const ProgressBar = ({ onSeek }: { onSeek: (position: number) => void }) => {
	const { position, duration, seekTo } = useProgress(onSeek);

	return (
		<div className="flex flex-col lg:flex-row justify-center items-center gap-1 lg:gap-2 w-full">
			<span className="hidden lg:block font-funnel text-xs text-neutral-300">
				{dayjs.duration(position, 'milliseconds').format('m:ss')}
			</span>
			<SeekBar duration={duration} position={position} onSeek={seekTo} />
			<span className="hidden lg:block font-funnel text-xs text-neutral-300">
				{dayjs.duration(duration, 'milliseconds').format('m:ss')}
			</span>
			<div className="lg:hidden flex justify-between items-center w-full">
				<span className="lg:hidden font-funnel text-xs text-neutral-300">
					{dayjs.duration(position, 'milliseconds').format('m:ss')}
				</span>
				<span className="lg:hidden font-funnel text-xs text-neutral-300">
					-
					{dayjs
						.duration(
							Math.max(duration - position, 0),
							'milliseconds'
						)
						.format('m:ss')}
				</span>
			</div>
		</div>
	);
};

export default ProgressBar;
