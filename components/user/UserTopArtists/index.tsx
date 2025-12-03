'use client';
import React from 'react';

import ShowcaseGrid from '@/components/shared/ShowcaseGrid';
import ArtistCard from '@/components/artist/ArtistCard';
import Loader from '@/components/shared/Loader';

import useUserTopArtists from '@/hooks/user/useUserTopArtists';

const UserTopArtists = () => {
	const { isLoading, artists } = useUserTopArtists();
	return isLoading ? (
		<div className="h-44">
			<Loader />
		</div>
	) : artists && artists.length > 0 ? (
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
	) : null;
};

export default UserTopArtists;
