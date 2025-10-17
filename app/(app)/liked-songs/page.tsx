'use client';
import React from 'react';

import PlaylistHeader from '@/components/playlist/PlaylistHeader';
import CollectionTracklist from '@/components/collection/CollectionTracklist';

import { useAppSelector } from '@/redux/hooks';

const LikedSongs = () => {
	const { likedSongs } = useAppSelector((state) => state.library);
	const user = useAppSelector((state) => state.user);

	if (!user || !likedSongs || !likedSongs.pagination) {
		return null;
	}

	return (
		<>
			<PlaylistHeader
				isLikedSongs={true}
				imageUrl="/liked-songs-300.jpg"
				contextUri={`${user.uri}:collection`}
				name="Liked Songs"
				owner={{ id: user.id!, displayName: user.displayName }}
				totalTracks={likedSongs.pagination.total}
			/>
			<CollectionTracklist
				type="playlist"
				paginationData={likedSongs.pagination}
				tracks={likedSongs.items}
				contextUri={`${user.uri}:collection`}
			/>
		</>
	);
};

export default LikedSongs;
