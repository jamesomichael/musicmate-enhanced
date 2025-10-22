import { useState, useEffect, useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getNowPlaying, setVolume } from '@/redux/slices/playerSlice';

const useVolumeControl = () => {
	const dispatch = useAppDispatch();
	const {
		device: { supports_volume: isSupported, volume_percent: volumePercent },
	} = useAppSelector(getNowPlaying);

	const [value, setValue] = useState(volumePercent || 100);
	const [previousValue, setPreviousValue] = useState(null);
	const [isMuted, setIsMuted] = useState(volumePercent === 0);

	useEffect(() => {
		setValue(volumePercent);
		setIsMuted(volumePercent === 0);
	}, [volumePercent]);

	const changeVolume = useCallback(
		(value: number) => {
			setValue(value);
			dispatch(setVolume(value));
		},
		[dispatch]
	);

	const toggleMute = useCallback(() => {
		if (!isMuted) {
			setPreviousValue(value);
			setValue(0);
			setIsMuted(true);
			dispatch(setVolume(0));
		} else {
			const updatedValue = previousValue ?? 100;
			setValue(updatedValue);
			setIsMuted(false);
			dispatch(setVolume(updatedValue));
		}
	}, [isMuted, value, previousValue, dispatch]);

	return { isSupported, isMuted, value, changeVolume, toggleMute };
};

export default useVolumeControl;
