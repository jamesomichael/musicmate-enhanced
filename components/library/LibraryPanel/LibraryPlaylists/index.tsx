import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Loader from '@/components/shared/Loader';
import ListItem from '../ListItem';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { fetchUserPlaylists } from '@/redux/slices/librarySlice';

const LibraryPlaylists = () => {
	const { playlists, likedSongs } = useAppSelector((state) => state.library);
	const dispatch = useAppDispatch();

	const totalLikedSongs = likedSongs.pagination?.total;

	const hasMore = !!playlists.pagination?.next;

	const loadMore = () => {
		if (playlists.pagination && hasMore) {
			const { offset, limit } = playlists.pagination;
			const newOffset = offset + limit;
			dispatch(fetchUserPlaylists({ offset: newOffset, limit }));
		}
	};

	// Show a loader if loading and only the default "Liked Songs" playlist exists...
	return playlists.isLoading && playlists.items.length === 1 ? (
		<Loader />
	) : (
		<InfiniteScroll
			dataLength={playlists.items.length}
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
				{playlists.items.map((playlist) => {
					const isLikedSongs = playlist.id === 'liked-songs';
					const secondaryText =
						isLikedSongs && totalLikedSongs
							? `${totalLikedSongs.toLocaleString()} songs`
							: 'owner' in playlist
							? playlist.owner.display_name
							: undefined;
					return (
						<ListItem
							key={playlist.id}
							href={
								playlist.id === 'liked-songs'
									? '/liked-songs'
									: `/playlist/${playlist.id}`
							}
							imageUrl={
								playlist.images?.length > 0
									? playlist.images[0].url
									: undefined
							}
							name={playlist.name}
							isPinned={
								'isPinned' in playlist
									? playlist.isPinned
									: false
							}
							secondaryText={secondaryText}
						/>
					);
				})}
			</div>
		</InfiniteScroll>
	);
};

export default LibraryPlaylists;
