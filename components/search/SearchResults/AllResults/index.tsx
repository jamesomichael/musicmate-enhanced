import React from 'react';

import TopResult from '../TopResult';
import TopTracks from '../TopTracks';

import type { SearchResultsData } from '@/types/search';

const AllResults = ({ data }: { data: SearchResultsData }) => {
	const { tracks, albums, artists, playlists } = data;
	const topResult =
		albums?.items?.[0] || artists?.items?.[0] || tracks?.items?.[0];

	return (
		<div className="flex flex-col gap-8">
			<div className="grid grid-cols-[1.3fr_2fr] gap-4">
				<TopResult
					id={topResult.id}
					imageUrl={topResult.images?.[0]?.url}
					name={topResult.name}
					type={topResult.album_type}
				/>
				<TopTracks tracks={tracks.items} />
			</div>
		</div>
	);
};

export default AllResults;
