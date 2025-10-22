import React from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

import SeekBar from '@/components/shared/SeekBar';

import useProgress from '@/hooks/useProgress';

const ProgressBar = ({ onSeek }: { onSeek: (position: number) => void }) => {
	const { position, duration, seekTo } = useProgress(onSeek);

	return (
		<div className="flex justify-center items-center gap-2 w-full">
			<span className="font-funnel text-xs text-neutral-300">
				{dayjs.duration(position, 'milliseconds').format('m:ss')}
			</span>
			<SeekBar duration={duration} position={position} onSeek={seekTo} />
			<span className="font-funnel text-xs text-neutral-300">
				{dayjs.duration(duration, 'milliseconds').format('m:ss')}
			</span>
		</div>
	);
};

export default ProgressBar;
