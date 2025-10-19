import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import { fetchArtistAlbums } from '@/services/spotify';
import { SpotifyAlbum } from '@/types/spotify';

const GET = async (
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) => {
	const { id: artistId } = await params;

	if (!artistId) {
		return NextResponse.json(
			{ message: 'Artist ID is required.' },
			{ status: 400 }
		);
	}

	const cookieStore = await cookies();
	const accessToken = cookieStore.get('access_token')?.value;
	const { searchParams } = new URL(request.url);
	const offset = Number(searchParams.get('offset')) || 0;
	const limit = Number(searchParams.get('limit')) || 50;
	const groups = searchParams.get('groups') || 'album,single,compilation';

	if (!accessToken) {
		return NextResponse.json(
			{ message: 'No access token provided.' },
			{ status: 401 }
		);
	}

	try {
		const { items, ...paginationData }: { items: SpotifyAlbum[] } =
			await fetchArtistAlbums(
				artistId,
				{ ...(offset && { offset }), ...(limit && { limit }), groups },
				accessToken
			);
		const discography = {
			...paginationData,
			albums: items.filter((item) => item.album_type === 'album'),
			singles: items.filter((item) => item.album_type === 'single'),
			compilations: items.filter(
				(item) => item.album_type === 'compilation'
			),
		};
		return NextResponse.json(discography);
	} catch (error) {
		return NextResponse.json(
			{ message: 'Failed to fetch artist albums.' },
			{ status: 500 }
		);
	}
};

export { GET };
