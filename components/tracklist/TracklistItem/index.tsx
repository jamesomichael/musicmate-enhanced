'use client';
import React, { useMemo, memo } from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';

import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(duration);
dayjs.extend(relativeTime);

import { IoIosPlay, IoIosPause } from 'react-icons/io';

import ExplicitBadge from '../ExplicitBadge';

import useTrackPlayback from '@/hooks/useTrackPlayback';

import type { SpotifyAlbum, SpotifyArtist } from '@/types/spotify';

const TracklistItem = ({
	id,
	number,
	name,
	artists,
	duration,
	isExplicit = false,
	contextUri,
	uri,
	position,
	album,
	showAlbumArt = true,
	addedAt,
	isLocal = false,
	gridConfig,
}: {
	id: string;
	number: number;
	name: string;
	artists?: SpotifyArtist[];
	duration: number;
	isExplicit?: boolean;
	contextUri: string;
	uri?: string;
	position?: number;
	album?: SpotifyAlbum;
	showAlbumArt?: boolean;
	addedAt?: string;
	isLocal?: boolean;
	gridConfig: string;
}) => {
	const { isNowPlaying, isActiveTrack, playTrack, pauseTrack } =
		useTrackPlayback({
			trackId: id,
			contextUri,
			...(uri && { uri }),
			...(position && { position }),
		});

	const formattedAddedAt = useMemo(() => {
		if (!addedAt) {
			return;
		}
		const weeksAgo = dayjs().diff(dayjs(addedAt), 'weeks');
		return weeksAgo > 4
			? dayjs(addedAt).format('D MMM YYYY')
			: weeksAgo >= 1
			? `${weeksAgo} week${weeksAgo > 1 ? 's' : ''} ago`
			: dayjs(addedAt).fromNow();
	}, [addedAt]);

	return (
		<div
			className={`group h-16 px-2 md:px-4 py-2 ${gridConfig} hover:bg-[#ffffff1a] rounded-md items-center font-funnel ${
				isLocal
					? 'opacity-30 cursor-not-allowed pointer-events-none'
					: ''
			}`}
			onDoubleClick={playTrack}
		>
			<div className="hidden md:block text-right">
				{isNowPlaying ? (
					<img
						src="/eq-animated.gif"
						className="h-4 w-4 ml-2.5 group-hover:hidden"
					></img>
				) : (
					<span
						className={`mr-1 group-hover:hidden ${
							isActiveTrack
								? 'text-spotify-green'
								: 'text-neutral-400'
						}`}
					>
						{number}
					</span>
				)}
				<div className="-mr-2 hidden group-hover:flex justify-center items-center">
					{isNowPlaying ? (
						<IoIosPause
							onClick={pauseTrack}
							className="h-6 w-6 text-white active:scale-95"
						/>
					) : (
						<IoIosPlay
							onClick={playTrack}
							className="h-6 w-6 text-white active:scale-95"
						/>
					)}
				</div>
			</div>
			<div className="flex items-center gap-2.5 h-full truncate">
				{showAlbumArt && album && (
					<div
						className="bg-center bg-cover h-full aspect-square rounded"
						style={{
							backgroundImage: `url(${album.images?.[0]?.url})`,
						}}
					></div>
				)}
				<div className="flex flex-col justify-center truncate">
					<div className="flex items-center gap-1">
						{isNowPlaying && (
							<img
								src="/eq-animated.gif"
								className="md:hidden h-3 w-3"
							></img>
						)}
						<span
							className={`${
								isActiveTrack
									? 'text-spotify-green'
									: 'text-white'
							} text-base truncate`}
						>
							{name}
						</span>
					</div>
					<div className="flex items-center">
						{isExplicit && <ExplicitBadge />}
						{artists && artists.length > 0
							? artists.map((artist, idx) => (
									<div
										key={artist.id}
										className={`text-sm text-neutral-400 group-hover:text-white ${
											idx < artists.length - 1
												? "after:content-[','] after:mr-1"
												: ''
										}`}
									>
										<Link
											href={`/artist/${artist.id}`}
											className="hover:underline"
											prefetch={false}
										>
											{artist.name}
										</Link>
									</div>
							  ))
							: null}
					</div>
				</div>
			</div>
			<>
				{album && (
					<Link
						href={`/album/${album.id}`}
						className="hidden md:block hover:underline truncate text-neutral-400 group-hover:text-white"
						prefetch={false}
					>
						{album.name}
					</Link>
				)}
				{formattedAddedAt && (
					<span className="hidden md:block text-neutral-300">
						{formattedAddedAt}
					</span>
				)}
			</>
			{duration && (
				<span className="hidden md:block mr-2 text-right text-neutral-400">
					{dayjs.duration(duration, 'milliseconds').format('m:ss')}
				</span>
			)}
		</div>
	);
};

export default memo(TracklistItem);
