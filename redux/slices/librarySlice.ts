import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import type { LibraryState } from '@/types/library';

const initialState: LibraryState = {
	panel: {
		activeTab: 'playlists',
		tabs: [
			{
				type: 'playlists',
				label: 'Playlists',
			},
			{
				type: 'albums',
				label: 'Albums',
			},
			{
				type: 'tracks',
				label: 'Songs',
			},
		],
	},
	playlists: {
		isLoading: true,
		pagination: null,
		items: [
			{
				id: 'liked-songs',
				name: 'Liked Songs',
				images: [
					{
						url: '/liked-songs-300.jpg',
					},
				],
				isPinned: true,
			},
		],
	},
};

export const fetchUserPlaylists = createAsyncThunk(
	'library/fetchUserPlaylists',
	async () => {
		const response = await axios.get('/api/library/playlists');
		const data = response.data;
		return data;
	}
);

const librarySlice = createSlice({
	name: 'library',
	initialState,
	reducers: {
		setActiveTab: (state, action) => {
			state.panel.activeTab = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUserPlaylists.rejected, (state) => {
			state.playlists.isLoading = false;
		});
		builder.addCase(fetchUserPlaylists.fulfilled, (state, action) => {
			state.playlists.isLoading = false;
			state.playlists.pagination = {
				href: action.payload.href,
				limit: action.payload.limit,
				offset: action.payload.offset,
				next: action.payload.next,
				previous: action.payload.previous,
				total: action.payload.total,
			};
			state.playlists.items = [
				...state.playlists.items,
				...action.payload.items,
			];
		});
	},
});

export const { setActiveTab } = librarySlice.actions;
export default librarySlice.reducer;
