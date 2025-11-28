import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { isUserPremium } from '@/redux/slices/userSlice';
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

import { showToast } from '@/utils/toast';

import type { SpotifyRepeatState } from '@/types/spotify';

const usePlayerControls = () => {
	const dispatch = useAppDispatch();
	const { isPlaying, isExternal, device, repeatState, shuffleState } =
		useAppSelector(getNowPlaying);
	const userHasPremium = useAppSelector(isUserPremium);

	const handlePause = () => {
		if (!userHasPremium) {
			showToast('Requires Spotify Premium.');
			return;
		}
		dispatch(pause(device.id));
	};

	const handleResume = () => {
		if (!userHasPremium) {
			showToast('Requires Spotify Premium.');
			return;
		}
		dispatch(resume(device.id));
	};

	const handleSeek = (position: number) => {
		if (!userHasPremium) {
			showToast('Requires Spotify Premium.');
			return;
		}
		dispatch(seek(position));
	};

	const handleSkipToNext = async () => {
		if (!userHasPremium) {
			showToast('Requires Spotify Premium.');
			return;
		}
		await dispatch(skipToNext());
		if (isExternal) {
			setTimeout(() => dispatch(fetchPlaybackState()), 500);
		}
	};

	const handleSkipToPrevious = async () => {
		if (!userHasPremium) {
			showToast('Requires Spotify Premium.');
			return;
		}
		await dispatch(skipToPrevious());
		if (isExternal) {
			setTimeout(() => dispatch(fetchPlaybackState()), 500);
		}
	};

	const toggleShuffle = () => {
		if (!userHasPremium) {
			showToast('Requires Spotify Premium.');
			return;
		}
		dispatch(setShuffleState(!shuffleState));
	};

	const toggleRepeat = () => {
		if (!userHasPremium) {
			showToast('Requires Spotify Premium.');
			return;
		}

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
