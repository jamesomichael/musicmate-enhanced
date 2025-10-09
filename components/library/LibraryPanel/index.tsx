'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

import { LuSquareLibrary } from 'react-icons/lu';
import { BsFillPinAngleFill } from 'react-icons/bs';

import LibraryTabs from './LibraryTabs';
import Loader from '@/components/shared/Loader';

import { useAppSelector } from '@/redux/hooks';
import { useAppDispatch } from '@/redux/hooks';
import { fetchUserPlaylists } from '@/redux/slices/librarySlice';
import ListItem from './ListItem';

const LibraryPanel = () => {
	const { playlists } = useAppSelector((state) => state.library);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchUserPlaylists());
	}, []);

	return (
		<div className="h-full flex flex-col gap-2 p-2 overflow-auto">
			<div className="flex flex-col gap-4 p-2">
				<div className="flex items-center py-1 gap-2 text-neutral-300">
					<LuSquareLibrary size={25} />
					<span className="font-funnel text-lg font-bold">
						Your Library
					</span>
				</div>
				<LibraryTabs />
			</div>
			<div className="h-full text-white">
				{playlists.isLoading ? (
					<Loader />
				) : (
					<div className="flex flex-col pb-3">
						{playlists.items.map((playlist) => (
							<ListItem
								key={playlist.id}
								href={`/playlist/${playlist.id}`}
								imageUrl={playlist.images[0]?.url}
								name={playlist.name}
								isPinned={playlist.isPinned}
								secondaryText={playlist.owner?.display_name}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default LibraryPanel;
