'use client';
import React from 'react';

import MediaHeader from '@/components/shared/MediaHeader';
import GenreTag from './GenreTag';

import useFollowArtist from '@/hooks/useFollowArtist';

const ArtistHeader = ({
	id,
	imageUrl,
	name,
	followers,
	contextUri,
	genres = [],
}: {
	id: string;
	imageUrl?: string;
	name: string;
	followers: number;
	contextUri: string;
	genres?: string[];
}) => {
	const { isFollowed, follow, unfollow } = useFollowArtist(id, contextUri);

	return (
		<MediaHeader
			imageUrl={imageUrl}
			type="artist"
			title={name}
			contextUri={contextUri}
			actions={
				<div
					onClick={isFollowed ? unfollow : follow}
					className="hover:scale-105 hover:cursor-pointer hover:outline-white transition-all duration-150 font-funnel font-bold text-white text-sm outline-1 outline-neutral-400 px-4 py-1.5 rounded-full"
				>
					<span>{isFollowed ? 'Following' : 'Follow'}</span>
				</div>
			}
			height="h-80"
		>
			<div className="flex flex-wrap items-center gap-2">
				<span className="font-funnel text-sm text-neutral-200">
					{followers.toLocaleString()} followers
				</span>
				{genres.length > 0 && (
					<div className="flex items-center gap-2">
						<span className="font-funnel text-neutral-400">•</span>
						{genres.map((genre) => {
							return <GenreTag key={genre} genre={genre} />;
						})}
					</div>
				)}
			</div>
		</MediaHeader>
	);
};

export default ArtistHeader;
