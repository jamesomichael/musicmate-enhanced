'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { PreloadedStateShapeFromReducersMapObject } from '@reduxjs/toolkit';

import { makeStore, AppStore, RootState } from './store';

export default function StoreProvider({
	children,
	preloadedState,
}: {
	children: React.ReactNode;
	preloadedState?: PreloadedStateShapeFromReducersMapObject<RootState>;
}) {
	const storeRef = useRef<AppStore | null>(null);
	if (!storeRef.current) {
		storeRef.current = makeStore(preloadedState);
	}

	return <Provider store={storeRef.current}>{children}</Provider>;
}
