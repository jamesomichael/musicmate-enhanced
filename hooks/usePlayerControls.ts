import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
	getNowPlaying,
	pause,
	resume,
	seek,
	skipToNext,
	skipToPrevious,
	fetchPlaybackState,
	setShuffleState,
	setRepeatState,
} from '@/redux/slices/playerSlice';

import type { SpotifyRepeatState } from '@/types/spotify';

const usePlayerControls = () => {
	const dispatch = useAppDispatch();
	const { isPlaying, isExternal, device, repeatState, shuffleState } =
		useAppSelector(getNowPlaying);

	const handlePause = () => dispatch(pause(device.id));

	const handleResume = () => dispatch(resume(device.id));

	const handleSeek = (position: number) => dispatch(seek(position));

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

	return {
		isPlaying,
		repeatState,
		shuffleState,
		pause: handlePause,
		resume: handleResume,
		seek: handleSeek,
		skipToNext: handleSkipToNext,
		skipToPrevious: handleSkipToPrevious,
		toggleShuffle,
		toggleRepeat,
	};
};

export default usePlayerControls;
