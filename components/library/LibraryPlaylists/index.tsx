import React from 'react';

import Loader from '@/components/shared/Loader';
import InfiniteScrollContainer from '@/components/shared/InfiniteScrollContainer';
import CollectionItem from '../CollectionItem';

import useInfiniteScroll from '@/hooks/shared/useInfiniteScroll';
import useLibraryPlaylists from '@/hooks/library/useLibraryPlaylists';

import { useAppSelector } from '@/redux/hooks';

import type { LikedSongsPlaylist } from '@/types/playlists';
import type { SpotifyPlaylist } from '@/types/spotify';

const LibraryPlaylists = () => {
	const { playlists, fetchPaginatedPlaylists } = useLibraryPlaylists();
	const { likedSongs } = useAppSelector((state) => state.library);
	const user = useAppSelector((state) => state.user);
	const { hasMore, loadMore } = useInfiniteScroll(
		playlists?.pagination,
		fetchPaginatedPlaylists
	);

	const totalLikedSongs = likedSongs.pagination?.total;

	// Show a loader if loading and only the default "Liked Songs" playlist exists...
	return playlists.isLoading && playlists.items.length === 1 ? (
		<Loader />
	) : (
		<InfiniteScrollContainer next={loadMore} hasMore={hasMore}>
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
							<CollectionItem
								key={playlist.id}
								type="playlist"
								uri={
									isLikedSongs
										? `${user.uri}:collection`
										: (playlist as SpotifyPlaylist).uri
								}
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
