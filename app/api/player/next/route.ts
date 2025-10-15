import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { skipToNext } from '@/services/spotify';

const POST = async () => {
	const cookieStore = await cookies();
	const accessToken = cookieStore.get('access_token')?.value;

	if (!accessToken) {
		return NextResponse.json(
			{ message: 'No access token provided.' },
			{ status: 401 }
		);
	}

	try {
		await skipToNext(accessToken);
		return new NextResponse(null, { status: 204 });
	} catch (error) {
		return NextResponse.json(
			{ message: 'Failed to skip to next track.' },
			{ status: 500 }
		);
	}
};

export { POST };
