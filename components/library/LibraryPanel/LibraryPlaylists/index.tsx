import React from 'react';

import Loader from '@/components/shared/Loader';
import ListItem from '../ListItem';

import { useAppSelector } from '@/redux/hooks';

const LibraryPlaylists = () => {
	const { playlists } = useAppSelector((state) => state.library);

	return playlists.isLoading ? (
		<Loader />
	) : (
		<div className="flex flex-col pb-3">
			{playlists.items.map((playlist) => (
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
					secondaryText={
						'owner' in playlist
							? playlist.owner.display_name
							: undefined
					}
				/>
			))}
		</div>
	);
};

export default LibraryPlaylists;
