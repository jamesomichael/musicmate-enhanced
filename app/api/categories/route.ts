import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { fetchCategories } from '@/services/spotify';

import type { SpotifyCategory } from '@/types/spotify';

const GET = async () => {
	const cookieStore = await cookies();
	const accessToken = cookieStore.get('access_token')?.value;

	if (!accessToken) {
		return NextResponse.json(
			{ message: 'No access token provided.' },
			{ status: 401 }
		);
	}

	try {
		const limit = 50;
		let offset = 0;
		let allCategories: SpotifyCategory[] = [];
		let hasMore = true;

		while (hasMore) {
			const data = await fetchCategories({ limit, offset }, accessToken);
			allCategories = [...allCategories, ...data.categories.items];
			offset += limit;
			hasMore = data.categories.items.length === limit;
		}

		const uniqueCategories = [
			...new Map(allCategories.map((item) => [item.id, item])).values(),
		];

		return NextResponse.json(uniqueCategories);
	} catch (error) {
		return NextResponse.json(
			{ message: 'Failed to fetch categories.' },
			{ status: 500 }
		);
	}
};

export { GET };
