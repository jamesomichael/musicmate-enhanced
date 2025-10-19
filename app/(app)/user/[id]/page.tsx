import React from 'react';
import { cookies } from 'next/headers';

import { fetchUser } from '@/services/spotify';

import HeroHeader from '@/components/shared/HeroHeader';

import type { SpotifyUser } from '@/types/spotify';

const User = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	const cookieStore = await cookies();
	const accessToken = cookieStore.get('access_token')!.value;

	const user: SpotifyUser = await fetchUser(id, accessToken);

	return (
		<>
			<HeroHeader
				imageUrl={user.images?.[0]?.url}
				type="profile"
				title={user.display_name ?? user.id}
			>
				<div className="flex flex-wrap items-center gap-2">
					{user.followers && (
						<span className="font-funnel text-sm text-neutral-200">
							{user.followers.total.toLocaleString()} followers
						</span>
					)}
				</div>
			</HeroHeader>
		</>
	);
};

export default User;
