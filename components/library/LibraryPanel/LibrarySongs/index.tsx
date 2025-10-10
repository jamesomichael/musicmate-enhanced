import React from 'react';

import Loader from '@/components/shared/Loader';
import InfiniteScrollContainer from '@/components/shared/InfiniteScrollContainer';
import ListItem from '../ListItem';

import useInfiniteScroll from '@/hooks/useInfiniteScroll';

import { useAppSelector } from '@/redux/hooks';
import { fetchUserLikedSongs } from '@/redux/slices/librarySlice';

const LibrarySongs = () => {
	const { likedSongs } = useAppSelector((state) => state.library);
	const { hasMore, loadMore } = useInfiniteScroll(
		likedSongs?.pagination,
		fetchUserLikedSongs
	);

	return likedSongs.isLoading && likedSongs.items.length === 0 ? (
		<Loader />
	) : (
		<InfiniteScrollContainer
			id="panel-songs-scroll-container"
			dataLength={likedSongs.items.length}
			hasMore={hasMore}
			next={loadMore}
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
		</InfiniteScrollContainer>
	);
};

export default LibrarySongs;
