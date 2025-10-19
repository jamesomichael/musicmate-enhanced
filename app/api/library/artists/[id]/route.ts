import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { followArtist, unfollowArtist } from '@/services/spotify';

const PUT = async (
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) => {
	const { id } = await params;

	if (!id) {
		return NextResponse.json(
			{ message: 'Artist ID is required.' },
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
		followArtist(id, accessToken);
		return new NextResponse(null, { status: 204 });
	} catch (error) {
		return NextResponse.json(
			{ message: 'Failed to follow artist.' },
			{ status: 500 }
		);
	}
};

const DELETE = async (
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) => {
	const { id } = await params;

	if (!id) {
		return NextResponse.json(
			{ message: 'Artist ID is required.' },
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
		unfollowArtist(id, accessToken);
		return new NextResponse(null, { status: 204 });
	} catch (error) {
		return NextResponse.json(
			{ message: 'Failed to unfollow artist.' },
			{ status: 500 }
		);
	}
};

export { PUT, DELETE };
