'use client';
import React from 'react';

import PlaylistHeader from '../PlaylistHeader';
import CollectionTracklist from '@/components/collection/CollectionTracklist';
import InfiniteScrollContainer from '@/components/shared/InfiniteScrollContainer';

import useInfiniteScroll from '@/hooks/shared/useInfiniteScroll';
import usePlaylistTracks from '@/hooks/playlist/usePlaylistTracks';

import type { SpotifyPlaylistItem } from '@/types/spotify';
import type { Pagination } from '@/types/library';

const PlaylistContainer = ({
	id,
	imageUrl,
	uri,
	name,
	description,
	owner,
	totalFollowers,
	totalTracks,
	tracks: initialTracks,
	paginationData: initialPaginationData,
}: {
	id: string;
	imageUrl?: string;
	uri: string;
	name: string;
	description?: string;
	owner: { id: string; displayName: string };
	totalFollowers?: number;
	totalTracks: number;
	tracks: SpotifyPlaylistItem[];
	paginationData: Pagination;
}) => {
	const { tracks, paginationData, fetchPaginatedTracks } = usePlaylistTracks(
		id,
		initialTracks,
		initialPaginationData
	);
	const { hasMore, loadMore } = useInfiniteScroll(
		paginationData,
		fetchPaginatedTracks
	);
	return (
		<InfiniteScrollContainer hasMore={hasMore} next={loadMore}>
			<PlaylistHeader
				imageUrl={imageUrl}
				contextUri={uri}
				name={name}
				description={description}
				owner={owner}
				totalFollowers={totalFollowers}
				totalTracks={totalTracks}
			/>
			<CollectionTracklist
				type="playlist"
				tracks={tracks}
				contextUri={uri}
			/>
		</InfiniteScrollContainer>
	);
};

export default PlaylistContainer;
