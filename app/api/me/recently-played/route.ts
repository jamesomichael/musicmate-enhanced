import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { fetchUserRecentlyPlayed } from '@/services/spotify';

const GET = async (request: NextRequest) => {
	const cookieStore = await cookies();
	const accessToken = cookieStore.get('access_token')?.value;
	const { searchParams } = new URL(request.url);
	const limit = Number(searchParams.get('limit')) || 50;

	if (!accessToken) {
		return NextResponse.json(
			{ message: 'No access token provided.' },
			{ status: 401 }
		);
	}

	try {
		const data = await fetchUserRecentlyPlayed({ limit }, accessToken);
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json(
			{ message: 'Failed to fetch recently played items.' },
			{ status: 500 }
		);
	}
};

export { GET };
