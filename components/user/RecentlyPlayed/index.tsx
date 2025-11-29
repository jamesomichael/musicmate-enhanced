import React, { useMemo } from 'react';

import ShowcaseGrid from '@/components/shared/ShowcaseGrid';
import DiscographyCard from '@/components/artist/Discography/DiscographyCard';

import type { SpotifyRecentlyPlayedItem } from '@/types/spotify';

const RecentlyPlayed = ({
	tracks,
}: {
	tracks: SpotifyRecentlyPlayedItem[];
}) => {
	const recentAlbums = useMemo(
		() => [
			...new Map(
				tracks.map(({ track }) => [track.album.id, track.album])
			).values(),
		],
		[tracks]
	);

	return (
		<ShowcaseGrid
			title="Recently played"
			items={recentAlbums}
			maxItems={7}
			renderItem={(item) => (
				<DiscographyCard
					id={item.id}
					type={item.album_type}
					imageUrl={item.images?.[0]?.url}
					name={item.name}
					artists={item.artists}
					releaseDate={item.release_date}
				/>
			)}
		/>
	);
};

export default RecentlyPlayed;
