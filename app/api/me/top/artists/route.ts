import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { fetchUserTopArtists } from '@/services/spotify';

const GET = async (request: NextRequest) => {
	const cookieStore = await cookies();
	const accessToken = cookieStore.get('access_token')?.value;
	const { searchParams } = new URL(request.url);
	const period = searchParams.get('period') || 'long_term';

	if (!accessToken) {
		return NextResponse.json(
			{ message: 'No access token provided.' },
			{ status: 401 }
		);
	}

	try {
		const data = await fetchUserTopArtists({ period }, accessToken);
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json(
			{ message: "Failed to fetch the user's top artists." },
			{ status: 500 }
		);
	}
};

export { GET };
