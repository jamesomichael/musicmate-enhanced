'use client';
import React from 'react';

import Tab from './Tab';

import { useAppSelector } from '@/redux/hooks';

const LibraryTabs = () => {
	const { tabs } = useAppSelector((state) => state.library.panel);

	return (
		<div className="relative">
			<div className="flex items-center gap-2 overflow-x-auto pr-8">
				{tabs.map(({ type, label }) => (
					<Tab key={type} type={type} label={label} />
				))}
			</div>
			<div className="pointer-events-none absolute top-0 -right-1 h-full w-8 bg-gradient-to-l from-spotify-black to-transparent" />
		</div>
	);
};

export default LibraryTabs;
