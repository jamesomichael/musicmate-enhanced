import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { fetchLikedSongs } from '@/services/spotify';

const GET = async () => {
	const cookieStore = await cookies();
	const accessToken = cookieStore.get('access_token')?.value;

	if (!accessToken) {
		return NextResponse.json(
			{ message: 'No access token provided.' },
			{ status: 401 }
		);
	}

	try {
		const data = await fetchLikedSongs({}, accessToken);
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json(
			{ message: 'Failed to fetch liked songs.' },
			{ status: 500 }
		);
	}
};

export { GET };
