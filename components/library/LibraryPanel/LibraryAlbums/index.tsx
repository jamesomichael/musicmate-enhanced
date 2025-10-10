import React from 'react';

import Loader from '@/components/shared/Loader';
import InfiniteScrollContainer from '@/components/shared/InfiniteScrollContainer';
import ListItem from '../ListItem';

import useInfiniteScroll from '@/hooks/useInfiniteScroll';

import { useAppSelector } from '@/redux/hooks';
import { fetchUserAlbums } from '@/redux/slices/librarySlice';

const LibraryAlbums = () => {
	const { albums } = useAppSelector((state) => state.library);
	const { hasMore, loadMore } = useInfiniteScroll(
		albums?.pagination,
		fetchUserAlbums
	);

	return albums.isLoading && albums.items.length === 0 ? (
		<Loader />
	) : (
		<InfiniteScrollContainer
			id="panel-albums-scroll-container"
			dataLength={albums.items.length}
			hasMore={hasMore}
			next={loadMore}
		>
			<div className="flex flex-col pb-3">
				{albums.items.map(({ album }) => {
					const artistNames = album.artists.map(
						(artist) => artist.name
					);
					const secondaryText =
						album.album_type === 'single'
							? `Single • ${artistNames.join(', ')}`
							: artistNames.join(', ');
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
		</InfiniteScrollContainer>
	);
};

export default LibraryAlbums;
