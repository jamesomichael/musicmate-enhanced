import React from 'react';

import Loader from '@/components/shared/Loader';
import ListItem from '../ListItem';

import { useAppSelector } from '@/redux/hooks';

const LibraryAlbums = () => {
	const { albums } = useAppSelector((state) => state.library);

	return albums.isLoading ? (
		<Loader />
	) : (
		<div className="flex flex-col pb-3">
			{albums.items.map(({ album }) => {
				const artist = album.artists[0]?.name;
				const secondaryText =
					album.album_type === 'single'
						? `Single • ${artist}`
						: artist;
				return (
					<ListItem
						key={album.id}
						href={`/album/${album.id}`}
						imageUrl={album.images[0]?.url}
						name={album.name}
						secondaryText={secondaryText}
					/>
				);
			})}
		</div>
	);
};

export default LibraryAlbums;
