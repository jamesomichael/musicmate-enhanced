import { createSlice } from '@reduxjs/toolkit';

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
};

const librarySlice = createSlice({
	name: 'library',
	initialState,
	reducers: {
		setActiveTab: (state, action) => {
			state.panel.activeTab = action.payload;
		},
	},
});

export const { setActiveTab } = librarySlice.actions;
export default librarySlice.reducer;
