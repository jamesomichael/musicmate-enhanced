import {
	createSlice,
	createAsyncThunk,
	createSelector,
} from '@reduxjs/toolkit';
import axios from 'axios';

import type { PlayerState } from '@/types/player';
import type { SpotifyRepeatState } from '@/types/spotify';

const initialState: PlayerState = {
	deviceId: null,
	isReady: false,
	playbackState: null,
	isLoading: false,
};

export const fetchPlaybackState = createAsyncThunk(
	'player/fetchPlaybackState',
	async () => {
		const response = await axios.get('/api/player/state');
		const data = response.data;
		return data;
	}
);

export const play = createAsyncThunk(
	'player/play',
	async ({
		deviceId,
		contextUri,
		offset,
	}: {
		deviceId: string;
		contextUri: string;
		offset: { position: number };
	}) => {
		await axios.put(`/api/player/play?device_id=${deviceId}`, {
			contextUri,
			offset,
		});
	}
);

export const pause = createAsyncThunk(
	'player/pause',
	async (deviceId: string) => {
		await axios.put(`/api/player/pause?device_id=${deviceId}`);
	}
);

export const resume = createAsyncThunk(
	'player/resume',
	async (deviceId: string) => {
		await axios.put(`/api/player/play?device_id=${deviceId}`);
	}
);

export const seek = createAsyncThunk(
	'player/seek',
	async (position: number) => {
		await axios.put(`/api/player/seek?position=${position}`);
		return position;
	}
);

export const skipToNext = createAsyncThunk('player/skipToNext', async () => {
	await axios.post('/api/player/next');
});

export const skipToPrevious = createAsyncThunk(
	'player/skipToPrevious',
	async () => {
		await axios.post('/api/player/previous');
	}
);

export const setShuffleState = createAsyncThunk(
	'player/setShuffleState',
	async (state: boolean) => {
		await axios.put(`/api/player/shuffle?state=${state}`);
		return state;
	}
);

export const setRepeatState = createAsyncThunk(
	'player/setRepeatState',
	async (state: SpotifyRepeatState) => {
		await axios.put(`/api/player/repeat?state=${state}`);
		return state;
	}
);

const playerSlice = createSlice({
	name: 'player',
	initialState,
	reducers: {
		setDeviceId(state, action) {
			state.deviceId = action.payload;
		},
		setIsReady(state, action) {
			state.isReady = action.payload;
		},
		setPlaybackState(state, action) {
			if (!state.playbackState) {
				state.playbackState = {
					item: action.payload.track,
					device: {
						id: state.deviceId!,
						is_active: true,
					},
					progress_ms: action.payload.progress || 0,
					is_playing: true,
					timestamp: +new Date(),
					...(action.payload.context && {
						context: action.payload.context,
					}),
				};
			} else {
				state.playbackState.item = action.payload.track;
				state.playbackState.progress_ms = action.payload.progress || 0;
				state.playbackState.timestamp = +new Date();
				state.playbackState.context = action.payload.context;
			}
		},
		setProgress(state, action) {
			if (!state.playbackState) {
				return;
			}
			state.playbackState.progress_ms = action.payload;
		},
		// setPlayer(state, action) {
		// 	console.error('action', action);
		// 	state.player = action.payload;
		// },
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPlaybackState.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchPlaybackState.fulfilled, (state, action) => {
			state.playbackState = action.payload;
			state.isLoading = false;
		});
		builder.addCase(pause.fulfilled, (state) => {
			if (!state.playbackState) {
				return;
			}
			state.playbackState.is_playing = false;
		});
		builder.addCase(resume.fulfilled, (state) => {
			if (!state.playbackState) {
				return;
			}
			state.playbackState.is_playing = true;
		});
		builder.addCase(seek.fulfilled, (state, action) => {
			if (!state.playbackState) {
				return;
			}
			state.playbackState.progress_ms = action.payload;
		});
		builder.addCase(setShuffleState.fulfilled, (state, action) => {
			if (!state.playbackState) {
				return;
			}
			state.playbackState.shuffle_state = action.payload;
		});
		builder.addCase(setRepeatState.fulfilled, (state, action) => {
			if (!state.playbackState) {
				return;
			}
			state.playbackState.repeat_state = action.payload;
		});
	},
});

export const getNowPlaying = createSelector(
	[(state) => state.player.deviceId, (state) => state.player.playbackState],
	(deviceId, playbackState) => {
		if (!!!playbackState) {
			return { isPlaying: false };
		}
		return {
			isPlaying: playbackState.is_playing,
			isActive: playbackState.device.is_active,
			isExternal: playbackState.device.id !== deviceId,
			isPrivate: playbackState.device.is_private_session,
			isPodcast: playbackState.currently_playing_type === 'episode',
			device: playbackState.device,
			progress: playbackState.progress_ms,
			timestamp: playbackState.timestamp,
			item: playbackState.item,
			context: playbackState.context,
			repeatState: playbackState.repeat_state,
			shuffleState: playbackState.shuffle_state,
		};
	}
);

export const { setDeviceId, setIsReady, setPlaybackState, setProgress } =
	playerSlice.actions;
export default playerSlice.reducer;
