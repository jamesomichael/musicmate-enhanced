import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { setShuffleState } from '@/services/spotify';

const PUT = async (request: NextRequest) => {
	const { searchParams } = new URL(request.url);
	const state = searchParams.get('state');

	if (!state) {
		return NextResponse.json(
			{ message: 'State is required.' },
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
		await setShuffleState(state === 'true', accessToken);
		return new NextResponse(null, { status: 204 });
	} catch (error) {
		return NextResponse.json(
			{ message: 'Failed to set shuffle state.' },
			{ status: 500 }
		);
	}
};

export { PUT };
