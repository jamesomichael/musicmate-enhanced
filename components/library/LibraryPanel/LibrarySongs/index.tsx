import React from 'react';

import Loader from '@/components/shared/Loader';
import ListItem from '../ListItem';

import { useAppSelector } from '@/redux/hooks';

const LibrarySongs = () => {
	const { likedSongs } = useAppSelector((state) => state.library);

	return likedSongs.isLoading ? (
		<Loader />
	) : (
		<div className="flex flex-col pb-3">
			{likedSongs.items.map(({ track }) => {
				const artistNames = track.artists.map((artist) => artist.name);
				const albumName = track.album.name;
				const secondaryText = `${artistNames.join(
					', '
				)} • ${albumName}`;
				return (
					<ListItem
						key={track.id}
						href={`/album/${track.album.id}`}
						imageUrl={track.album.images[0]?.url}
						name={track.name}
						secondaryText={secondaryText}
					/>
				);
			})}
		</div>
	);
};

export default LibrarySongs;
