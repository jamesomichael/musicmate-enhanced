import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { fetchAlbumTracks } from '@/services/spotify';

const GET = async (
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) => {
	const { id } = await params;

	if (!id) {
		return NextResponse.json(
			{ message: 'Album ID is required.' },
			{ status: 400 }
		);
	}

	const cookieStore = await cookies();
	const accessToken = cookieStore.get('access_token')?.value;
	const { searchParams } = new URL(request.url);
	const offset = Number(searchParams.get('offset')) || 0;
	const limit = Number(searchParams.get('limit')) || 50;

	if (!accessToken) {
		return NextResponse.json(
			{ message: 'No access token provided.' },
			{ status: 401 }
		);
	}

	try {
		const data = await fetchAlbumTracks(id, { offset, limit }, accessToken);
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json(
			{ message: 'Failed to fetch album tracks.' },
			{ status: 500 }
		);
	}
};

export { GET };
