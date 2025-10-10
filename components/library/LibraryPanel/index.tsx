'use client';
import React, { useEffect } from 'react';

import { LuSquareLibrary } from 'react-icons/lu';

import Loader from '@/components/shared/Loader';
import LibraryTabs from './LibraryTabs';
import LibraryPlaylists from './LibraryPlaylists';

import { useAppSelector } from '@/redux/hooks';
import { useAppDispatch } from '@/redux/hooks';
import { fetchUserPlaylists } from '@/redux/slices/librarySlice';

const LibraryPanel = () => {
	const { activeTab } = useAppSelector((state) => state.library.panel);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchUserPlaylists());
	}, []);

	return (
		<div className="h-full flex flex-col gap-2 p-2">
			<div className="flex flex-col gap-4 p-2">
				<div className="flex items-center py-1 gap-2 text-neutral-300">
					<LuSquareLibrary size={25} />
					<span className="font-funnel text-lg font-bold">
						Your Library
					</span>
				</div>
				<LibraryTabs />
			</div>
			<div className="h-full text-white overflow-auto">
				{activeTab === 'playlists' ? <LibraryPlaylists /> : <Loader />}
			</div>
		</div>
	);
};

export default LibraryPanel;
