import React from 'react';
import { cookies } from 'next/headers';

import CollectionHeader from '@/components/collection/CollectionHeader';

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

	const owner = {
		id: playlistData.owner.id,
		name: playlistData.owner.display_name,
	};

	return (
		<CollectionHeader
			type={playlistData.type}
			imageUrl={playlistData.images?.[0]?.url}
			title={playlistData.name}
			description={playlistData.description}
			creators={[owner]}
			totalTracks={playlistData.tracks.total}
		/>
	);
};

export default Playlist;
