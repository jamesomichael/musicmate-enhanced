import React from 'react';

import Loader from '@/components/shared/Loader';
import InfiniteScrollContainer from '@/components/shared/InfiniteScrollContainer';
import CollectionItem from '../CollectionItem';

import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import useLibraryAlbums from '@/hooks/useLibraryAlbums';

const LibraryAlbums = () => {
	const { albums, fetchPaginatedAlbums } = useLibraryAlbums();
	const { hasMore, loadMore } = useInfiniteScroll(
		albums?.pagination,
		fetchPaginatedAlbums
	);

	return albums.isLoading && albums.items.length === 0 ? (
		<Loader />
	) : (
		<InfiniteScrollContainer hasMore={hasMore} next={loadMore}>
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
						<CollectionItem
							key={album.id}
							type={album.album_type}
							uri={album.uri}
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
