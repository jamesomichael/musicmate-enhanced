'use client';
import React from 'react';

import AlbumHeader from '../AlbumHeader';
import CollectionTracklist from '@/components/collection/CollectionTracklist';
import InfiniteScrollContainer from '@/components/shared/InfiniteScrollContainer';

import useAlbumTracks from '@/hooks/useAlbumTracks';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

import type {
	SpotifyAlbumType,
	SpotifyArtist,
	SpotifyCopyright,
	SpotifyReleaseDatePrecision,
	SpotifyTrack,
} from '@/types/spotify';
import type { Pagination } from '@/types/library';

const AlbumContainer = ({
	id,
	imageUrl,
	type,
	name,
	artists,
	uri,
	releaseDate,
	releaseDatePrecision,
	copyrightNotices,
	totalTracks,
	tracks: initialTracks,
	paginationData: initialPaginationData,
}: {
	id: string;
	imageUrl?: string;
	type: SpotifyAlbumType;
	name: string;
	artists: SpotifyArtist[];
	uri: string;
	releaseDate: string;
	releaseDatePrecision?: SpotifyReleaseDatePrecision;
	copyrightNotices?: SpotifyCopyright[];
	totalTracks: number;
	tracks: SpotifyTrack[];
	paginationData: Pagination;
}) => {
	const { tracks, paginationData, fetchPaginatedTracks } = useAlbumTracks(
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
			<AlbumHeader
				imageUrl={imageUrl}
				type={type}
				name={name}
				artists={artists}
				contextUri={uri}
				releaseDate={releaseDate}
				totalTracks={totalTracks}
			/>
			<CollectionTracklist
				type={type}
				tracks={tracks}
				releaseDate={releaseDate}
				releaseDatePrecision={releaseDatePrecision}
				copyrightNotices={copyrightNotices}
				contextUri={uri}
			/>
		</InfiniteScrollContainer>
	);
};

export default AlbumContainer;
