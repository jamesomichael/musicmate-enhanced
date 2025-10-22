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

const useCollectionPlayback = (contextUri: string) => {
	const dispatch = useAppDispatch();
	const { deviceId: localDeviceId } = useAppSelector((state) => state.player);
	const { isPlaying, isActive, isExternal, shuffleState, context, device } =
		useAppSelector(getNowPlaying);

	const deviceId = device?.id ?? localDeviceId;

	const isCurrentContext = context?.uri === contextUri;
	const isPlayingCollection = isPlaying && isCurrentContext;
	const isActiveCollection = isActive && isCurrentContext;

	const handlePlay = useCallback(async () => {
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
	}, [isActiveCollection, deviceId, contextUri, isExternal, dispatch]);

	const handlePause = useCallback(
		() => dispatch(pause(deviceId)),
		[deviceId, dispatch]
	);

	const toggleShuffle = useCallback(
		() => dispatch(setShuffleState(!shuffleState)),
		[shuffleState, dispatch]
	);

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
