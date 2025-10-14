import {
	createSlice,
	createAsyncThunk,
	createSelector,
} from '@reduxjs/toolkit';
import axios from 'axios';

import type { PlayerState } from '@/types/player';

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
		};
	}
);

export const { setDeviceId, setIsReady, setPlaybackState, setProgress } =
	playerSlice.actions;
export default playerSlice.reducer;
