import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
	getNowPlaying,
	play,
	pause,
	fetchPlaybackState,
} from '@/redux/slices/playerSlice';

const useTrackPlayback = ({
	trackId,
	contextUri,
	uri,
	position,
}: {
	trackId: string;
	contextUri: string;
	uri?: string;
	position?: number;
}) => {
	const dispatch = useAppDispatch();
	const {
		isActive,
		isExternal,
		isPlaying,
		device,
		context,
		item: itemNowPlaying,
	} = useAppSelector(getNowPlaying);
	const { deviceId: localDeviceId } = useAppSelector((state) => state.player);

	const isActiveTrack =
		itemNowPlaying?.id === trackId && context?.uri === contextUri;

	const isNowPlaying = isActiveTrack && isPlaying;

	const activeDeviceId = isActive && isExternal ? device.id : localDeviceId;

	const playTrack = useCallback(async () => {
		await dispatch(
			play({
				deviceId: activeDeviceId,
				contextUri,
				...(position
					? { offset: { position } }
					: uri
					? { offset: { uri } }
					: {}),
			})
		);
		if (isExternal) {
			setTimeout(() => dispatch(fetchPlaybackState()), 500);
		}
	}, [
		isActive,
		isExternal,
		device,
		localDeviceId,
		contextUri,
		position,
		uri,
		dispatch,
	]);

	const pauseTrack = useCallback(
		() => dispatch(pause(activeDeviceId)),
		[activeDeviceId, dispatch]
	);

	return { isNowPlaying, isActiveTrack, playTrack, pauseTrack };
};

export default useTrackPlayback;
