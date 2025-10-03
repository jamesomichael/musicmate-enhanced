import {
	configureStore,
	StateFromReducersMapObject,
	PreloadedStateShapeFromReducersMapObject,
} from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';

const reducer = {
	auth: authReducer,
	user: userReducer,
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = StateFromReducersMapObject<typeof reducer>;

export const makeStore = (
	preloadedState?: PreloadedStateShapeFromReducersMapObject<RootState>
) => {
	return configureStore({
		reducer,
		preloadedState,
	});
};

export type AppDispatch = AppStore['dispatch'];
