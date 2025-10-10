import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { fetchUserAlbums } from '@/services/spotify.service';

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
		const data = await fetchUserAlbums({}, accessToken);
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json(
			{ message: 'Failed to fetch user albums.' },
			{ status: 500 }
		);
	}
};

export { GET };
