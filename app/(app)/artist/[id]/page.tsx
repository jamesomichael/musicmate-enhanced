import React from 'react';
import { cookies } from 'next/headers';

import ArtistHeader from '@/components/artist/ArtistHeader';

import { fetchArtistById } from '@/services/spotify';

import type { SpotifyArtist } from '@/types/spotify';

const Artist = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	const cookieStore = await cookies();
	const accessToken = cookieStore.get('access_token')!.value;

	const artistData: SpotifyArtist = await fetchArtistById(id, accessToken);

	if (!artistData) {
		return null;
	}

	return (
		<ArtistHeader
			imageUrl={artistData.images?.[0]?.url}
			name={artistData.name}
			followers={artistData.followers.total}
			genres={artistData.genres}
		/>
	);
};

export default Artist;
