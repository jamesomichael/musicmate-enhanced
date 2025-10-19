import React from 'react';
import { cookies } from 'next/headers';

import ArtistHeader from '@/components/artist/ArtistHeader';
import ArtistTopTracks from '@/components/artist/ArtistTopTracks';
import Loader from '@/components/shared/Loader';
import DiscographyPreview from '@/components/artist/Discography/DiscographyPreview';

import {
	fetchArtistAlbums,
	fetchArtistById,
	fetchArtistTopTracks,
} from '@/services/spotify';

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

	const discographyGroups = ['album', 'single', 'compilation'];

	const [albums, singles, compilations] = await Promise.all(
		discographyGroups.map((group) =>
			fetchArtistAlbums(id, { limit: 10, groups: group }, accessToken)
		)
	);

	return (
		<>
			<ArtistHeader
				imageUrl={artistData.images?.[0]?.url}
				name={artistData.name}
				followers={artistData.followers.total}
				genres={artistData.genres}
				contextUri={artistData.uri}
			/>
			<div className="flex flex-col gap-8 px-8 pt-4 pb-8">
				<div className="grid grid-cols-2">
					<ArtistTopTracks
						tracks={topTracks}
						contextUri={artistData.uri}
					/>
					<Loader />
				</div>
				<div className="mt-2">
					<DiscographyPreview
						data={{ albums, singles, compilations }}
					/>
				</div>
			</div>
		</>
	);
};

export default Artist;
