import React from 'react';
import { cookies } from 'next/headers';

import { DISCOGRAPHY_GROUPS } from '@/constants/discography';

import Discography from '@/components/artist/Discography';

import { fetchArtistById, fetchArtistAlbums } from '@/services/spotify';

import type { SpotifyArtist } from '@/types/spotify';
import type { DiscographyTabType } from '@/types/artists';

const ArtistDiscography = async ({
	params,
	searchParams,
}: {
	params: Promise<{ id: string }>;
	searchParams: Promise<{ tab?: DiscographyTabType }>;
}) => {
	const { id } = await params;
	const { tab } = (await searchParams) ?? 'albums';
	const cookieStore = await cookies();
	const accessToken = cookieStore.get('access_token')!.value;

	const artistData: SpotifyArtist = await fetchArtistById(id, accessToken);

	if (!artistData) {
		return null;
	}

	const [albums, singles, compilations] = await Promise.all(
		DISCOGRAPHY_GROUPS.map((group) =>
			fetchArtistAlbums(id, { limit: 50, groups: group }, accessToken)
		)
	);

	return (
		<div className="p-4 md:p-8">
			<Discography
				artistId={artistData.id}
				title={artistData.name}
				data={{ albums, singles, compilations }}
				defaultTab={tab}
			/>
		</div>
	);
};

export default ArtistDiscography;
