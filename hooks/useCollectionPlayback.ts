import { useCallback } from 'react';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import {
	getNowPlaying,
	resume,
	play,
	fetchPlaybackState,
	pause,
	setShuffleState,
} from '@/redux/slices/playerSlice';
import { isUserPremium } from '@/redux/slices/userSlice';

import { showToast } from '@/utils/toast';

const useCollectionPlayback = (contextUri: string) => {
	const dispatch = useAppDispatch();
	const { deviceId: localDeviceId } = useAppSelector((state) => state.player);
	const { isPlaying, isActive, isExternal, shuffleState, context, device } =
		useAppSelector(getNowPlaying);
	const userHasPremium = useAppSelector(isUserPremium);

	const deviceId = device?.id ?? localDeviceId;

	const isCurrentContext = context?.uri === contextUri;
	const isPlayingCollection = isPlaying && isCurrentContext;
	const isActiveCollection = isActive && isCurrentContext;

	const handlePlay = useCallback(async () => {
		if (!userHasPremium) {
			showToast('Requires Spotify Premium.');
			return;
		}
		if (isActiveCollection) {
			await dispatch(resume(deviceId));
		} else {
			await dispatch(
				play({
					deviceId,
					contextUri,
				})
			);
		}
		if (isExternal) {
			setTimeout(() => dispatch(fetchPlaybackState()), 500);
		}
	}, [
		userHasPremium,
		isActiveCollection,
		deviceId,
		contextUri,
		isExternal,
		dispatch,
	]);

	const handlePause = useCallback(() => {
		if (!userHasPremium) {
			showToast('Requires Spotify Premium.');
			return;
		}
		dispatch(pause(deviceId));
	}, [userHasPremium, deviceId, dispatch]);

	const toggleShuffle = useCallback(() => {
		if (!userHasPremium) {
			showToast('Requires Spotify Premium.');
			return;
		}
		dispatch(setShuffleState(!shuffleState));
	}, [userHasPremium, shuffleState, dispatch]);

	return {
		isPlayingCollection,
		isActiveCollection,
		shuffleState,
		play: handlePlay,
		pause: handlePause,
		toggleShuffle,
	};
};

export default useCollectionPlayback;
