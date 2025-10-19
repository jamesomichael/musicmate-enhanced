import React from 'react';

import Loader from '@/components/shared/Loader';
import InfiniteScrollContainer from '@/components/shared/InfiniteScrollContainer';
import ListItem from '../ListItem';

import useInfiniteScroll from '@/hooks/useInfiniteScroll';

import { useAppSelector } from '@/redux/hooks';
import { fetchUserPlaylists } from '@/redux/slices/librarySlice';

import type { LikedSongsPlaylist } from '@/types/playlists';
import type { SpotifyPlaylist } from '@/types/spotify';

const LibraryPlaylists = () => {
	const { playlists, likedSongs } = useAppSelector((state) => state.library);
	const { hasMore, loadMore } = useInfiniteScroll<SpotifyPlaylist>(
		playlists?.pagination,
		fetchUserPlaylists
	);

	const totalLikedSongs = likedSongs.pagination?.total;

	// Show a loader if loading and only the default "Liked Songs" playlist exists...
	return playlists.isLoading && playlists.items.length === 1 ? (
		<Loader />
	) : (
		<InfiniteScrollContainer
			id="panel-playlists-scroll-container"
			dataLength={playlists.items.length}
			next={loadMore}
			hasMore={hasMore}
		>
			<div className="flex flex-col pb-3">
				{playlists.items.map(
					(playlist: LikedSongsPlaylist | SpotifyPlaylist) => {
						const isLikedSongs = playlist.id === 'liked-songs';
						const secondaryText =
							isLikedSongs && totalLikedSongs
								? `${totalLikedSongs.toLocaleString()} songs`
								: 'owner' in playlist
								? playlist.owner.display_name
								: undefined;
						return (
							<ListItem
								type="playlist"
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
					}
				)}
			</div>
		</InfiniteScrollContainer>
	);
};

export default LibraryPlaylists;
