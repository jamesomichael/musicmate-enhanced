import React from 'react';

import TopResult from '../TopResult';
import TopTracks from '../TopTracks';
import ShowcaseGrid from '@/components/shared/ShowcaseGrid';
import DiscographyCard from '@/components/artist/Discography/DiscographyCard';
import ArtistCard from '@/components/artist/ArtistCard';
import PlaylistCard from '@/components/playlist/PlaylistCard';

import type { SearchResultsData } from '@/types/search';

const AllResults = ({ data }: { data: SearchResultsData }) => {
	const { tracks, albums, artists, playlists } = data;
	const topResult =
		albums?.items?.[0] || artists?.items?.[0] || tracks?.items?.[0];

	return (
		<div className="flex flex-col gap-10">
			<div className="flex flex-col lg:grid lg:grid-cols-[1.3fr_2fr] gap-10 lg:gap-4">
				<TopResult
					id={topResult.id}
					imageUrl={topResult.images?.[0]?.url}
					name={topResult.name}
					type={topResult.album_type}
					artist={topResult.artists[0]}
				/>
				<TopTracks tracks={tracks.items} />
			</div>
			<div className="flex flex-col gap-4">
				<ShowcaseGrid
					title="Artists"
					items={artists.items}
					maxItems={7}
					renderItem={(item) => (
						<ArtistCard
							id={item.id}
							imageUrl={item.images?.[0]?.url}
							name={item.name}
						/>
					)}
				/>
				<ShowcaseGrid
					title="Albums"
					items={albums.items}
					maxItems={7}
					renderItem={(item) => (
						<DiscographyCard
							id={item.id}
							type={item.album_type}
							imageUrl={item.images?.[0]?.url}
							artists={item.artists}
							name={item.name}
							releaseDate={item.release_date}
						/>
					)}
				/>
				<ShowcaseGrid
					title="Playlists"
					items={playlists.items}
					maxItems={7}
					renderItem={(item) =>
						item ? (
							<PlaylistCard
								id={item.id}
								imageUrl={item.images?.[0]?.url}
								name={item.name}
								owner={item.owner.display_name ?? item.owner.id}
							/>
						) : null
					}
				/>
			</div>
		</div>
	);
};

export default AllResults;
