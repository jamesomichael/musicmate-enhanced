import React from 'react';
import { cookies } from 'next/headers';

import { DISCOGRAPHY_GROUPS } from '@/constants/discography';

import ArtistHeader from '@/components/artist/ArtistHeader';
import ArtistTopTracks from '@/components/artist/ArtistTopTracks';
import FeaturedItem from '@/components/artist/FeaturedItem';
import Discography from '@/components/artist/Discography';

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

	const [albums, singles, compilations] = await Promise.all(
		DISCOGRAPHY_GROUPS.map((group) =>
			fetchArtistAlbums(id, { limit: 10, groups: group }, accessToken)
		)
	);

	const featuredItem =
		albums?.items?.[0] || singles?.items?.[0] || compilations?.items?.[0];

	return (
		<>
			<ArtistHeader
				id={artistData.id}
				imageUrl={artistData.images?.[0]?.url}
				name={artistData.name}
				followers={artistData.followers.total}
				genres={artistData.genres}
				contextUri={artistData.uri}
			/>
			<div className="flex flex-col gap-10 px-8 pt-4 pb-8">
				<div
					className={
						featuredItem ? 'grid grid-cols-[1.25fr_1fr] gap-6' : ''
					}
				>
					<ArtistTopTracks
						tracks={topTracks}
						contextUri={artistData.uri}
					/>
					{featuredItem && <FeaturedItem item={featuredItem} />}
				</div>
				<Discography
					artistId={artistData.id}
					data={{ albums, singles, compilations }}
					title="Discography"
					isExpandable={true}
					maxItems={7}
				/>
			</div>
		</>
	);
};

export default Artist;
