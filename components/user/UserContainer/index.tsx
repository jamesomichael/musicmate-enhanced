'use client';
import React from 'react';

import HeroHeader from '@/components/shared/HeroHeader';
import Button from '@/components/shared/Button';
import RecentlyPlayed from '../RecentlyPlayed';
import UserTopArtists from '../UserTopArtists';
import UserTopTracks from '../UserTopTracks';

import useLogOut from '@/hooks/useLogOut';

import { useAppSelector } from '@/redux/hooks';

import type { SpotifyFollowers } from '@/types/spotify';

const UserContainer = ({
	id,
	imageUrl,
	displayName,
	followers,
}: {
	id: string;
	imageUrl?: string;
	displayName?: string;
	followers?: SpotifyFollowers;
}) => {
	const loggedInUser = useAppSelector((state) => state.user);
	const isLoggedInUser = id === loggedInUser.id;
	const logOut = useLogOut();
	return (
		<>
			<HeroHeader
				imageUrl={imageUrl}
				type="profile"
				title={displayName ?? id}
			>
				<div className="flex flex-wrap items-center gap-2">
					{followers && (
						<span className="font-funnel text-sm text-neutral-200">
							{followers.total.toLocaleString()} followers
						</span>
					)}
				</div>
			</HeroHeader>
			{isLoggedInUser && (
				<div className="flex flex-col justify-center gap-4 p-6">
					<RecentlyPlayed />
					<UserTopArtists />
					<UserTopTracks />
					<div className="lg:hidden py-10 flex justify-center">
						<Button text="Log out" onClick={logOut} />
					</div>
				</div>
			)}
		</>
	);
};

export default UserContainer;
