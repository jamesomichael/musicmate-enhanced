import React from 'react';

import ShowcaseGrid from '@/components/shared/ShowcaseGrid';
import ArtistCard from '@/components/artist/ArtistCard';

import type { SpotifyArtist } from '@/types/spotify';

const UserTopArtists = ({ artists }: { artists: SpotifyArtist[] }) => {
	return (
		<div className="flex flex-col gap-2">
			<span className="font-funnel font-bold text-2xl leading-none text-white">
				Top artists this year
			</span>
			<span className="font-funnel text-sm text-neutral-300">
				Only visible to you
			</span>
			<ShowcaseGrid
				items={artists}
				maxItems={7}
				renderItem={(item) => (
					<ArtistCard
						id={item.id}
						imageUrl={item.images?.[0]?.url}
						name={item.name}
					/>
				)}
			/>
		</div>
	);
};

export default UserTopArtists;
