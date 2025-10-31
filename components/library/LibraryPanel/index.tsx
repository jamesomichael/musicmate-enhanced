'use client';
import React from 'react';

import { LuSquareLibrary } from 'react-icons/lu';

import Loader from '@/components/shared/Loader';
import LibraryTabs from './LibraryTabs';
import LibraryPlaylists from './LibraryPlaylists';
import LibraryAlbums from './LibraryAlbums';
import LibrarySongs from './LibrarySongs';
import LibraryArtists from './LibraryArtists';

import { useAppSelector } from '@/redux/hooks';

const LibraryPanel = () => {
	const { activeTab } = useAppSelector((state) => state.library.panel);
	return (
		<div className="h-full flex flex-col gap-2 p-2">
			<div className="flex flex-col gap-4 p-2">
				<div className="flex items-center py-1 gap-2 text-white">
					<LuSquareLibrary className="w-6 h-6" />
					<span className="font-funnel text-lg font-bold">
						Your Library
					</span>
				</div>
				<LibraryTabs />
			</div>
			<div className="h-full text-white overflow-hidden">
				{activeTab === 'playlists' ? (
					<LibraryPlaylists />
				) : activeTab === 'albums' ? (
					<LibraryAlbums />
				) : activeTab === 'tracks' ? (
					<LibrarySongs />
				) : activeTab === 'artists' ? (
					<LibraryArtists />
				) : (
					<Loader />
				)}
			</div>
		</div>
	);
};

export default LibraryPanel;
