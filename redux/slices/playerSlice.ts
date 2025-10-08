import {
	createSlice,
	createAsyncThunk,
	createSelector,
} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	deviceId: null,
	isReady: false,
	playbackState: null,
	isLoading: false,
};

export const play = createAsyncThunk('player/play', async () => {
	const response = await axios.get('/api/play');
	const data = response.data;
	return data;
});

export const fetchPlaybackState = createAsyncThunk(
	'player/fetchPlaybackState',
	async () => {
		const response = await axios.get('/api/player/state');
		const data = response.data;
		return data;
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
		if (!playbackState) {
			return { isPlaying: false };
		}
		return {
			isPlaying: playbackState.is_playing,
			isExternal: playbackState.device.id !== deviceId,
			isPodcast: playbackState.currently_playing_type === 'episode',
			device: playbackState.device,
			progress: playbackState.progress_ms,
			item: playbackState.item,
			context: playbackState.context,
		};
	}
);

export const { setDeviceId, setIsReady } = playerSlice.actions;
export default playerSlice.reducer;
