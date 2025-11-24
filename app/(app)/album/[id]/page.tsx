import React from 'react';
import { cookies } from 'next/headers';

import AlbumContainer from '@/components/album/AlbumContainer';

import { fetchAlbumById } from '@/services/spotify';

import type { SpotifyAlbum } from '@/types/spotify';

const Album = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	const cookieStore = await cookies();
	const accessToken = cookieStore.get('access_token')!.value;

	const albumData: SpotifyAlbum = await fetchAlbumById(id, accessToken);

	const { items, ...paginationData } = albumData.tracks;

	return (
		<AlbumContainer
			id={id}
			imageUrl={albumData.images?.[0]?.url}
			type={albumData.album_type}
			name={albumData.name}
			artists={albumData.artists}
			uri={albumData.uri}
			releaseDate={albumData.release_date}
			releaseDatePrecision={albumData.release_date_precision}
			copyrightNotices={albumData.copyrights}
			totalTracks={albumData.total_tracks}
			tracks={items}
			paginationData={paginationData}
		/>
	);
};

export default Album;
