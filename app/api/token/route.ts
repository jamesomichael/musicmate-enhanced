import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const GET = async () => {
	try {
		const cookieStore = await cookies();
		const accessToken = cookieStore.get('access_token')?.value;
		return NextResponse.json({ token: accessToken });
	} catch (error) {
		console.error('Error getting token:', error);
		return NextResponse.json(
			{ error: 'Failed to get token.' },
			{ status: 500 }
		);
	}
};

module.exports = { GET };
