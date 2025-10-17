import React from 'react';
import { cookies } from 'next/headers';

import AlbumHeader from '@/components/album/AlbumHeader';
import CollectionTracklist from '@/components/collection/CollectionTracklist';

import { fetchAlbumById } from '@/services/spotify';

import type { SpotifyAlbum } from '@/types/spotify';

const Album = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	const cookieStore = await cookies();
	const accessToken = cookieStore.get('access_token')!.value;

	const albumData: SpotifyAlbum = await fetchAlbumById(id, accessToken);

	const { items, ...paginationData } = albumData.tracks;

	return (
		<>
			<AlbumHeader
				imageUrl={albumData.images?.[0]?.url}
				type={albumData.album_type}
				name={albumData.name}
				artists={albumData.artists}
				contextUri={albumData.uri}
				totalTracks={albumData.total_tracks}
			/>
			<CollectionTracklist
				type={albumData.album_type}
				tracks={items}
				album={albumData}
				paginationData={paginationData}
				contextUri={albumData.uri}
			/>
		</>
	);
};

export default Album;
