import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

import SeekBar from '@/components/shared/SeekBar';

import { useAppSelector } from '@/redux/hooks';
import { getNowPlaying } from '@/redux/slices/playerSlice';

const ProgressBar = () => {
	const {
		isPlaying,
		progress,
		timestamp,
		item: { duration_ms: duration },
	} = useAppSelector(getNowPlaying);

	const [position, setPosition] = useState<number>(progress);

	useEffect(() => {
		setPosition(progress);
	}, [progress, timestamp]);

	useEffect(() => {
		if (!isPlaying) {
			return;
		}

		const interval = setInterval(() => {
			setPosition((prev) => {
				if (prev + 1000 >= duration) {
					clearInterval(interval);
					return duration;
				}
				return prev + 1000;
			});
		}, 1000);

		return () => clearInterval(interval);
	}, [isPlaying, duration, timestamp]);

	const handleSeek = (value: number) => {
		setPosition(value);
	};

	return (
		<div className="flex justify-center items-center gap-2 w-full">
			<span className="font-funnel text-xs text-neutral-300">
				{dayjs.duration(position, 'milliseconds').format('m:ss')}
			</span>
			<SeekBar
				duration={duration}
				position={position}
				onSeek={handleSeek}
			/>
			<span className="font-funnel text-xs text-neutral-300">
				{dayjs.duration(duration, 'milliseconds').format('m:ss')}
			</span>
		</div>
	);
};

export default ProgressBar;
