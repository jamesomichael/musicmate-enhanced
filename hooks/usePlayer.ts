import { useState, useEffect } from 'react';

import { useAppDispatch } from '@/redux/hooks';
import { setIsReady, setDeviceId } from '@/redux/slices/playerSlice';
import { fetchPlaybackState } from '@/redux/slices/playerSlice';

const usePlayer = (accessToken: string) => {
	const dispatch = useAppDispatch();
	const [player, setPlayer] = useState(null);

	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://sdk.scdn.co/spotify-player.js';
		script.async = true;
		document.body.appendChild(script);

		window.onSpotifyWebPlaybackSDKReady = () => {
			const spotifyPlayer = new window.Spotify.Player({
				name: 'musicmate',
				getOAuthToken: (cb) => cb(accessToken),
				volume: 0.5,
			});

			setPlayer(spotifyPlayer);

			spotifyPlayer.addListener('ready', ({ device_id }) => {
				console.log('[Player] Ready with device ID:', device_id);
				dispatch(setDeviceId(device_id));
				dispatch(setIsReady(true));
			});

			spotifyPlayer.addListener('not_ready', ({ device_id }) => {
				console.log(
					`[Player] Device ID '${device_id}' has gone offline.`
				);
			});

			spotifyPlayer.addListener('player_state_changed', (state) => {
				if (state) {
					console.log('[Player] Player state changed:', state);
					// setDuration(state.track_window.current_track.duration_ms);
					// setProgress(state.position);
					// // const track = state.track_window.current_track;
					// // setCurrentTrack({
					// // 	...track,
					// // });
				}
			});

			spotifyPlayer.addListener('initialization_error', ({ message }) =>
				console.error('[Player] Initialization error:', message)
			);

			spotifyPlayer.addListener('authentication_error', ({ message }) =>
				console.error('[Player] Authentication error:', message)
			);

			spotifyPlayer.addListener('account_error', ({ message }) =>
				console.error('[Player] Account error:', message)
			);

			spotifyPlayer.addListener('playback_error', ({ message }) =>
				console.error('[Player] Playback error:', message)
			);

			spotifyPlayer.connect();
		};

		dispatch(fetchPlaybackState());
		// const intervalId = setInterval(() => {
		// 	dispatch(fetchPlaybackState());
		// }, 5000);

		return () => {
			// clearInterval(intervalId);
			if (player) {
				player.disconnect();
			}
			document.body.removeChild(script);
		};
	}, [accessToken]);
};

export default usePlayer;
