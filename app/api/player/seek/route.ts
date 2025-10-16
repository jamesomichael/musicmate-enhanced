import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { seek } from '@/services/spotify';

const PUT = async (request: NextRequest) => {
	const { searchParams } = new URL(request.url);
	const position = searchParams.get('position');

	if (!position) {
		return NextResponse.json(
			{ message: 'Position is required.' },
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
		await seek(Number(position), accessToken);
		return new NextResponse(null, { status: 204 });
	} catch (error) {
		return NextResponse.json(
			{ message: 'Failed to seek.' },
			{ status: 500 }
		);
	}
};

export { PUT };
