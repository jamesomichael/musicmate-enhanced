import React from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';

import MediaHeader from '@/components/shared/MediaHeader';

import type { SpotifyAlbumType, SpotifyArtist } from '@/types/spotify';

const AlbumHeader = ({
	imageUrl,
	type,
	name,
	artists,
	contextUri,
	releaseDate,
	totalTracks,
}: {
	imageUrl?: string;
	type: SpotifyAlbumType;
	name: string;
	artists: SpotifyArtist[];
	contextUri: string;
	releaseDate: string;
	totalTracks: number;
}) => {
	return (
		<MediaHeader
			imageUrl={imageUrl}
			type={type}
			title={name}
			contextUri={contextUri}
		>
			<div className="font-funnel text-sm flex items-center flex-wrap">
				{artists.map((artist, idx) => (
					<div
						key={artist.id}
						className={`font-bold text-white ${
							idx > 0 ? "before:content-['•'] before:mx-1" : ''
						}`}
					>
						<Link
							href={`/artist/${artist.id}`}
							className="hover:underline"
						>
							{artist.name}
						</Link>
					</div>
				))}
				<div className="before:content-['•'] before:mx-1 text-neutral-300">
					<span>{dayjs(releaseDate).year()}</span>
				</div>
				<div className="before:content-['•'] before:mx-1 text-neutral-300">
					<span>
						{totalTracks.toLocaleString()}{' '}
						{totalTracks === 1 ? 'song' : 'songs'}
					</span>
				</div>
			</div>
		</MediaHeader>
	);
};

export default AlbumHeader;
