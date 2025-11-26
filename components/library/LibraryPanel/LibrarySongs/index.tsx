import React from 'react';

import Loader from '@/components/shared/Loader';
import InfiniteScrollContainer from '@/components/shared/InfiniteScrollContainer';
import TrackItem from '../TrackItem';

import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import useLikedSongs from '@/hooks/useLikedSongs';

const LibrarySongs = () => {
	const { likedSongs, fetchPaginatedLikedSongs } = useLikedSongs();
	const { hasMore, loadMore } = useInfiniteScroll(
		likedSongs?.pagination,
		fetchPaginatedLikedSongs
	);

	return likedSongs.isLoading && likedSongs.items.length === 0 ? (
		<Loader />
	) : (
		<InfiniteScrollContainer hasMore={hasMore} next={loadMore}>
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
						<TrackItem
							key={track.id}
							id={track.id}
							uri={track.uri}
							contextUri={track.album.uri}
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
