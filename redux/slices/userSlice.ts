import { createSlice } from '@reduxjs/toolkit';

import { logOut } from './authSlice';

import type { SpotifyCurrentUser } from '@/types/spotify';
import type { UserState } from '@/types/user';

const initialState: UserState = {
	displayName: null,
	country: null,
	email: null,
	explicitContent: null,
	externalUrls: null,
	followers: null,
	href: null,
	id: null,
	images: null,
	product: null,
	type: null,
	uri: null,
};

export const preloadedUserState = (
	user: Partial<SpotifyCurrentUser>
): UserState => ({
	displayName: user?.display_name ?? null,
	country: user?.country ?? null,
	email: user?.email ?? null,
	explicitContent: user?.explicit_content ?? null,
	externalUrls: user?.external_urls ?? null,
	followers: user?.followers ?? null,
	href: user?.href ?? null,
	id: user?.id ?? null,
	images: user?.images ?? null,
	product: user?.product ?? null,
	type: user?.type ?? null,
	uri: user?.uri ?? null,
});

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action) {
			state.displayName = action.payload.display_name;
			state.country = action.payload.country;
			state.email = action.payload.email;
			state.explicitContent = action.payload.explicit_content;
			state.externalUrls = action.payload.external_urls;
			state.followers = action.payload.followers;
			state.href = action.payload.href;
			state.id = action.payload.id;
			state.images = action.payload.images;
			state.product = action.payload.product;
			state.type = action.payload.type;
			state.uri = action.payload.uri;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(logOut.fulfilled, () => {
			return initialState;
		});
	},
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
