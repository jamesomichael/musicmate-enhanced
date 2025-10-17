import React from 'react';
import { cookies } from 'next/headers';

import PlaylistHeader from '@/components/playlist/PlaylistHeader';
import CollectionTracklist from '@/components/collection/CollectionTracklist';

import { fetchPlaylistById } from '@/services/spotify';

import type { SpotifyPlaylist } from '@/types/spotify';

const Playlist = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	const cookieStore = await cookies();
	const accessToken = cookieStore.get('access_token')!.value;

	const playlistData: SpotifyPlaylist = await fetchPlaylistById(
		id,
		accessToken
	);

	const { items, ...paginationData } = playlistData.tracks;

	const owner = {
		id: playlistData.owner.id,
		displayName: playlistData.owner.display_name,
	};

	return (
		<>
			<PlaylistHeader
				imageUrl={playlistData.images?.[0]?.url}
				contextUri={playlistData.uri}
				name={playlistData.name}
				description={playlistData.description}
				owner={owner}
				totalFollowers={playlistData.followers?.total}
				totalTracks={playlistData.tracks.total}
			/>
			<CollectionTracklist
				type={playlistData.type}
				tracks={items}
				paginationData={paginationData}
				contextUri={playlistData.uri}
			/>
		</>
	);
};

export default Playlist;
