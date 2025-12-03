import React from 'react';
import { cookies } from 'next/headers';

import { fetchUser } from '@/services/spotify';

import UserContainer from '@/components/user/UserContainer';

import type { SpotifyUser } from '@/types/spotify';

const User = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	const cookieStore = await cookies();
	const accessToken = cookieStore.get('access_token')!.value;

	const user: SpotifyUser = await fetchUser(id, accessToken);

	return (
		<UserContainer
			id={user.id}
			imageUrl={user.images?.[0]?.url}
			displayName={user.display_name}
			followers={user.followers}
		/>
	);
};

export default User;
