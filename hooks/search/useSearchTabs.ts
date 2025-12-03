import { useMemo } from 'react';

import type { SearchResultsData } from '@/types/search';

const useSearchTabs = (results: SearchResultsData) => {
	const { albums, artists, playlists, tracks } = results;

	return useMemo(
		() => ({
			results: {
				label: 'All',
				data: results,
			},
			...(playlists.items.length > 0 && {
				playlists: {
					label: 'Playlists',
					data: playlists,
				},
			}),
			...(artists.items.length > 0 && {
				artists: {
					label: 'Artists',
					data: artists,
				},
			}),
			...(albums.items.length > 0 && {
				albums: {
					label: 'Albums',
					data: albums,
				},
			}),
			...(tracks.items.length > 0 && {
				tracks: {
					label: 'Songs',
					data: tracks,
				},
			}),
		}),
		[albums, artists, playlists, results, tracks]
	);
};

export default useSearchTabs;
