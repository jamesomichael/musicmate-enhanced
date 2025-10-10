import React from 'react';

import Loader from '@/components/shared/Loader';
import ListItem from '../ListItem';

import { useAppSelector } from '@/redux/hooks';

const LibraryPlaylists = () => {
	const { playlists, likedSongs } = useAppSelector((state) => state.library);

	const totalLikedSongs = likedSongs.pagination?.total;

	return playlists.isLoading ? (
		<Loader />
	) : (
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
						imageUrl={playlist.images[0]?.url}
						name={playlist.name}
						isPinned={
							'isPinned' in playlist ? playlist.isPinned : false
						}
						secondaryText={secondaryText}
					/>
				);
			})}
		</div>
	);
};

export default LibraryPlaylists;
