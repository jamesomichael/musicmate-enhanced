import {
	createSlice,
	createAsyncThunk,
	createSelector,
} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	deviceId: null,
	isReady: false,
	// player: null,
	playbackState: null,

	isLoading: false,
	// hasFetched: false,
	// categories: [],
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
		// builder.addCase(fetchCategories.rejected, (state) => {
		// 	state.categories = [];
		// 	state.hasFetched = true;
		// 	state.isLoading = false;
		// });
	},
});

export const getCurrentTrack = createSelector(
	[(state) => state.player.playbackState],
	(playbackState) => {
		if (!playbackState) {
			return null;
		}
		return playbackState.item;
	}
);

export const { setDeviceId, setIsReady } = playerSlice.actions;
export default playerSlice.reducer;
