import React from 'react';

import Loader from '@/components/shared/Loader';

import { useAppSelector } from '@/redux/hooks';

import ListItem from '../ListItem';

const LibraryArtists = () => {
	const { artists } = useAppSelector((state) => state.library);

	return artists.isLoading && artists.items.length === 0 ? (
		<Loader />
	) : (
		<div className="flex flex-col pb-3">
			{artists.items.map((artist) => {
				return (
					<ListItem
						key={artist.id}
						type="artist"
						href={`/artist/${artist.id}`}
						imageUrl={artist.images?.[0]?.url}
						name={artist.name}
					/>
				);
			})}
		</div>
	);
};

export default LibraryArtists;
