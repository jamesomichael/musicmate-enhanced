'use client';
import React from 'react';

import CollectionHeader from '@/components/collection/CollectionHeader';
import CollectionTracklist from '@/components/collection/CollectionTracklist';

import { useAppSelector } from '@/redux/hooks';

const LikedSongs = () => {
	const { likedSongs } = useAppSelector((state) => state.library);
	const user = useAppSelector((state) => state.user);

	if (!user || !likedSongs || !likedSongs.pagination) {
		return null;
	}

	const owner = {
		id: user.id!,
		name: user.displayName || user.id!,
	};

	return (
		<>
			<CollectionHeader
				type="playlist"
				contextUri={`${user.uri}:collection`}
				imageUrl="/liked-songs-300.jpg"
				title="Liked Songs"
				creators={[owner]}
				gradientFrom="from-blue-800"
				gradientTo="to-blue-950"
				totalTracks={likedSongs.pagination.total}
				showControls={true}
				showBlurredBackground={false}
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
