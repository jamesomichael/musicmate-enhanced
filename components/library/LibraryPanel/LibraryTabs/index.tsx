'use client';
import React from 'react';

import Tab from '../../../shared/Tab';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { setActiveTab } from '@/redux/slices/librarySlice';

import type { LibraryTabType } from '@/types/library';

const LibraryTabs = () => {
	const { tabs, activeTab } = useAppSelector((state) => state.library.panel);
	const dispatch = useAppDispatch();

	const changeTab = (type: LibraryTabType) => {
		dispatch(setActiveTab(type));
	};

	return (
		<div className="relative">
			<div className="flex items-center gap-2 overflow-x-auto pr-8">
				{tabs.map(({ type, label }) => (
					<Tab
						key={type}
						label={label}
						onClick={() => changeTab(type)}
						isActive={activeTab === type}
					/>
				))}
			</div>
			<div className="pointer-events-none absolute top-0 -right-1 h-full w-8 bg-gradient-to-l from-spotify-black to-transparent" />
		</div>
	);
};

export default LibraryTabs;
