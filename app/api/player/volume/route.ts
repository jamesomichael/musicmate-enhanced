import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { setVolume } from '@/services/spotify';

const PUT = async (request: NextRequest) => {
	const { searchParams } = new URL(request.url);
	const value = searchParams.get('value');

	if (!value) {
		return NextResponse.json(
			{ message: 'Value is required.' },
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
		await setVolume(Number(value), accessToken);
		return new NextResponse(null, { status: 204 });
	} catch (error) {
		return NextResponse.json(
			{ message: 'Failed to set volume.' },
			{ status: 500 }
		);
	}
};

export { PUT };
