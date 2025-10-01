import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface AuthState {
	isAuthorised: boolean;
	username: string | null;
	accessToken: string | null;
	refreshToken: string | null;
	error: string | null;
}

const initialState: AuthState = {
	isAuthorised: false,
	username: null,
	accessToken: null,
	refreshToken: null,
	error: null,
};

export const logOut = createAsyncThunk('auth/logOut', async () => {
	await axios.post('/api/logout');
});

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setIsAuthorised(state, action) {
			state.isAuthorised = action.payload;
		},
		setUsername(state, action) {
			state.username = action.payload;
		},
		setAccessToken(state, action) {
			state.accessToken = action.payload;
		},
		setRefreshToken(state, action) {
			state.accessToken = action.payload;
		},
		setError(state, action) {
			state.error = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(logOut.fulfilled, (state) => {
			state.isAuthorised = false;
			state.username = null;
			state.accessToken = null;
			state.refreshToken = null;
			state.error = null;
		});
	},
});

export const { setIsAuthorised, setUsername, setAccessToken, setRefreshToken } =
	authSlice.actions;
export default authSlice.reducer;
