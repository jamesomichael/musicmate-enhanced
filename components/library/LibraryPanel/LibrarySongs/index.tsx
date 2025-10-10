import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Loader from '@/components/shared/Loader';
import ListItem from '../ListItem';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { fetchUserLikedSongs } from '@/redux/slices/librarySlice';

const LibrarySongs = () => {
	const { likedSongs } = useAppSelector((state) => state.library);
	const dispatch = useAppDispatch();

	const hasMore = !!likedSongs.pagination?.next;

	const loadMore = () => {
		if (likedSongs.pagination && hasMore) {
			const { offset, limit } = likedSongs.pagination;
			const newOffset = offset + limit;
			dispatch(fetchUserLikedSongs({ offset: newOffset, limit }));
		}
	};

	return likedSongs.isLoading && likedSongs.items.length === 0 ? (
		<Loader />
	) : (
		<div className="h-full overflow-auto" id="panel-songs-scroll-container">
			<InfiniteScroll
				dataLength={likedSongs.items.length}
				next={loadMore}
				hasMore={hasMore}
				loader={
					<div className="py-6">
						<Loader />
					</div>
				}
				scrollableTarget="panel-songs-scroll-container"
				style={{ overflow: 'visible' }}
			>
				<div className="flex flex-col pb-3">
					{likedSongs.items.map(({ track }) => {
						const artistNames = track.artists.map(
							(artist) => artist.name
						);
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
			</InfiniteScroll>
		</div>
	);
};

export default LibrarySongs;
