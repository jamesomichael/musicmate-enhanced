import { useState, useEffect } from 'react';

import { useAppSelector } from '@/redux/hooks';
import { getNowPlaying } from '@/redux/slices/playerSlice';

const useProgress = (onSeek: (position: number) => void) => {
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

	const seekTo = (value: number) => {
		setPosition(value);
		onSeek(value);
	};

	return {
		position,
		duration,
		seekTo,
	};
};

export default useProgress;
