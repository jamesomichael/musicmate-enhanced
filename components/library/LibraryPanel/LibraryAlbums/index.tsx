import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Loader from '@/components/shared/Loader';
import ListItem from '../ListItem';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { fetchUserAlbums } from '@/redux/slices/librarySlice';

const LibraryAlbums = () => {
	const { albums } = useAppSelector((state) => state.library);
	const dispatch = useAppDispatch();

	const hasMore = !!albums.pagination?.next;

	const loadMore = () => {
		if (albums.pagination && hasMore) {
			const { offset, limit } = albums.pagination;
			const newOffset = offset + limit;
			dispatch(fetchUserAlbums({ offset: newOffset, limit }));
		}
	};

	return albums.isLoading && albums.items.length === 0 ? (
		<Loader />
	) : (
		<InfiniteScroll
			dataLength={albums.items.length}
			next={loadMore}
			hasMore={hasMore}
			loader={
				<div className="py-6">
					<Loader />
				</div>
			}
			scrollableTarget="library-infinite-scroll-container"
			style={{ overflow: 'visible' }}
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
		</InfiniteScroll>
	);
};

export default LibraryAlbums;
