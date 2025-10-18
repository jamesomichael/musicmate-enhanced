import React from 'react';
import { cookies } from 'next/headers';

import ArtistHeader from '@/components/artist/ArtistHeader';
import ArtistTopTracks from '@/components/artist/ArtistTopTracks';
import Loader from '@/components/shared/Loader';

import { fetchArtistById, fetchArtistTopTracks } from '@/services/spotify';

import type { SpotifyArtist, SpotifyTrack } from '@/types/spotify';

const Artist = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	const cookieStore = await cookies();
	const accessToken = cookieStore.get('access_token')!.value;

	const artistData: SpotifyArtist = await fetchArtistById(id, accessToken);

	if (!artistData) {
		return null;
	}

	const { tracks: topTracks }: { tracks: SpotifyTrack[] } =
		await fetchArtistTopTracks(id, accessToken);

	return (
		<>
			<ArtistHeader
				imageUrl={artistData.images?.[0]?.url}
				name={artistData.name}
				followers={artistData.followers.total}
				genres={artistData.genres}
				contextUri={artistData.uri}
			/>
			<div className="grid grid-cols-2">
				<ArtistTopTracks
					tracks={topTracks}
					contextUri={artistData.uri}
				/>
				<Loader />
			</div>
		</>
	);
};

export default Artist;
