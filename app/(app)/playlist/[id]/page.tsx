import React from 'react';
import { cookies } from 'next/headers';

import PlaylistContainer from '@/components/playlist/PlaylistContainer';

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
		<PlaylistContainer
			id={id}
			name={playlistData.name}
			uri={playlistData.uri}
			imageUrl={playlistData.images?.[0]?.url}
			description={playlistData.description}
			owner={owner}
			tracks={items}
			totalFollowers={playlistData.followers?.total}
			totalTracks={playlistData.tracks.total}
			paginationData={paginationData}
		/>
	);
};

export default Playlist;
