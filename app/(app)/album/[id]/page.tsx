import React from 'react';
import { cookies } from 'next/headers';

import CollectionHeader from '@/components/collection/CollectionHeader';

import { fetchAlbumById } from '@/services/spotify';

import type { SpotifyAlbum } from '@/types/spotify';

const Album = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	const cookieStore = await cookies();
	const accessToken = cookieStore.get('access_token')!.value;

	const albumData: SpotifyAlbum = await fetchAlbumById(id, accessToken);

	const artists = albumData.artists.map(({ id, name }) => ({
		id,
		name,
	}));

	return (
		<CollectionHeader
			type={albumData.album_type}
			imageUrl={albumData.images[0]?.url}
			title={albumData.name}
			creators={artists}
			totalTracks={albumData.total_tracks}
		/>
	);
};

export default Album;
