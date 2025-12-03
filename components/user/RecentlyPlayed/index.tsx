'use client';
import React from 'react';

import ShowcaseGrid from '@/components/shared/ShowcaseGrid';
import DiscographyCard from '@/components/artist/Discography/DiscographyCard';
import Loader from '@/components/shared/Loader';

import useRecentlyPlayed from '@/hooks/useRecentlyPlayed';

const RecentlyPlayed = () => {
	const { isLoading, albums } = useRecentlyPlayed();
	return isLoading ? (
		<div className="h-44">
			<Loader />
		</div>
	) : albums && albums.length > 0 ? (
		<ShowcaseGrid
			title="Recently played"
			items={albums}
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
	) : null;
};

export default RecentlyPlayed;
