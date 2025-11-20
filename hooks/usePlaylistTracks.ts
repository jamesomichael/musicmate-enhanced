import { useState, useCallback } from 'react';
import axios from 'axios';

import type { SpotifyPlaylistItem } from '@/types/spotify';
import type { Pagination } from '@/types/library';

const usePlaylistTracks = (
	playlistId: string,
	initialTracks: SpotifyPlaylistItem[],
	initialPaginationData: Pagination
) => {
	const [tracks, setTracks] = useState(initialTracks);
	const [paginationData, setPaginationData] = useState(initialPaginationData);

	const fetchPaginatedTracks = useCallback(
		async ({ offset, limit }: { offset: number; limit: number }) => {
			const response = await axios.get(
				`/api/playlist/${playlistId}/tracks?offset=${offset}&limit=${limit}`
			);
			const { items, ...newPaginationData } = response.data;
			setTracks((prev) => [...prev, ...items]);
			setPaginationData(newPaginationData);
		},
		[playlistId]
	);

	return { tracks, paginationData, fetchPaginatedTracks };
};

export default usePlaylistTracks;
