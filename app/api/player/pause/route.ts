import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { pause } from '@/services/spotify';

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

	try {
		await pause(deviceId, accessToken);
		return new NextResponse(null, { status: 204 });
	} catch (error) {
		return NextResponse.json(
			{ message: 'Failed to pause playback.' },
			{ status: 500 }
		);
	}
};

export { PUT };
