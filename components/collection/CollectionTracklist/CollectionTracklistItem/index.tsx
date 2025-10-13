import React from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';

import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(duration);
dayjs.extend(relativeTime);

import type { SpotifyAlbumType, SpotifyTrack } from '@/types/spotify';

type Props =
	| {
			type: 'playlist';
			gridConfig: string;
			number: number;
			track: SpotifyTrack;
			addedAt: string;
	  }
	| {
			type: SpotifyAlbumType;
			gridConfig: string;
			number: number;
			track: SpotifyTrack;
			addedAt?: never;
	  };

const CollectionTracklistItem = ({
	type,
	gridConfig = 'grid grid-cols-[2rem_1.5fr_5rem] gap-5',
	number,
	track,
	addedAt,
}: Props) => {
	let formattedAddedAt;

	if (type === 'playlist') {
		const weeksAgo = dayjs().diff(dayjs(addedAt), 'weeks');
		formattedAddedAt =
			weeksAgo > 4
				? dayjs(addedAt).format('D MMM YYYY')
				: weeksAgo >= 1
				? `${weeksAgo} week${weeksAgo > 1 ? 's' : ''} ago`
				: dayjs(addedAt).fromNow();
	}

	return (
		<div
			className={`group h-16 px-4 py-2 ${gridConfig} hover:bg-[#ffffff1a] rounded-md items-center font-funnel`}
		>
			<span className="mr-1 text-right text-neutral-400 group-hover:text-white">
				{number}
			</span>
			<div className="flex items-center gap-2.5 h-full truncate">
				{type === 'playlist' && (
					<div
						className="bg-center bg-cover h-full aspect-square rounded"
						style={{
							backgroundImage: `url(${track.album.images?.[0]?.url})`,
						}}
					></div>
				)}
				<div className="flex flex-col justify-center truncate">
					<span className="truncate">{track.name}</span>
					<div className="flex items-center">
						{track.explicit && (
							<div className="mr-1 flex justify-center items-center h-4 aspect-square bg-neutral-300 rounded-xs">
								<span className="font-bold text-[0.7rem] text-spotify-black">
									E
								</span>
							</div>
						)}
						{track.artists.map((artist, idx) => (
							<div
								key={artist.id}
								className={`text-sm text-neutral-400 group-hover:text-white ${
									idx < track.artists.length - 1
										? "after:content-[','] after:mr-1"
										: ''
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
					</div>
				</div>
			</div>
			{type === 'playlist' && (
				<>
					<Link
						href={`/album/${track.album.id}`}
						className="hover:underline truncate text-neutral-400 group-hover:text-white"
					>
						{track.album.name}
					</Link>
					<span className="text-neutral-300">{formattedAddedAt}</span>
				</>
			)}
			<span className="mr-2 text-right text-neutral-400">
				{dayjs
					.duration(track.duration_ms, 'milliseconds')
					.format('m:ss')}
			</span>
		</div>
	);
};

export default CollectionTracklistItem;
