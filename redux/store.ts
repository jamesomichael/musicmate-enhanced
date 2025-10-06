import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import categoriesReducer from './slices/categoriesSlice';
import playerReducer from './slices/playerSlice';

const reducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	categories: categoriesReducer,
	player: playerReducer,
});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof reducer>;

export const makeStore = (preloadedState?: Partial<RootState>) => {
	return configureStore({
		reducer,
		preloadedState,
	});
};

export type AppDispatch = AppStore['dispatch'];
