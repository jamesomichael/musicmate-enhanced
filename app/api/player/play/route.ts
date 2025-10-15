import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { play } from '@/services/spotify';

interface PlayBody {
	contextUri?: string;
	uris?: string[];
	offset?: number;
}

const PUT = async (request: NextRequest) => {
	const { searchParams } = new URL(request.url);
	const deviceId = searchParams.get('device_id');

	if (!deviceId) {
		return NextResponse.json(
			{ message: 'Device ID is required.' },
			{ status: 400 }
		);
	}

	const cookieStore = await cookies();
	const accessToken = cookieStore.get('access_token')?.value;

	if (!accessToken) {
		return NextResponse.json(
			{ message: 'No access token provided.' },
			{ status: 401 }
		);
	}

	let body: PlayBody = {};

	try {
		body = await request.json();
	} catch {
		body = {};
	}

	const { contextUri, uris, offset } = body;

	try {
		await play(
			deviceId,
			{
				...(contextUri && { contextUri }),
				...(uris && { uris }),
				...(offset && { offset }),
			},
			accessToken
		);
		return new NextResponse(null, { status: 204 });
	} catch (error) {
		return NextResponse.json(
			{ message: 'Failed to start playback.' },
			{ status: 500 }
		);
	}
};

export { PUT };
