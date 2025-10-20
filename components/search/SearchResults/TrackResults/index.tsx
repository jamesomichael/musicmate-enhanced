import React from 'react';

import CollectionTracklist from '@/components/collection/CollectionTracklist';

import type { SpotifyPaginatedResponse, SpotifyTrack } from '@/types/spotify';

const TrackResults = ({
	tracks,
}: {
	tracks: SpotifyPaginatedResponse<SpotifyTrack>;
}) => {
	const { items, ...paginationData } = tracks;
	return (
		<CollectionTracklist
			type="results"
			tracks={items}
			paginationData={paginationData}
		/>
	);
};

export default TrackResults;
