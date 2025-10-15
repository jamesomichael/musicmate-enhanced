'use client';
import React, { useCallback, useMemo } from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';

import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(duration);
dayjs.extend(relativeTime);

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
	play,
	setPlaybackState,
	getNowPlaying,
} from '@/redux/slices/playerSlice';

import type {
	SpotifyAlbum,
	SpotifyAlbumType,
	SpotifyTrack,
} from '@/types/spotify';

interface BaseProps {
	gridConfig?: string;
	number: number;
	track: SpotifyTrack;
	contextUri: string;
}

type Props =
	| (BaseProps & {
			type: 'playlist';
			album?: never;
			addedAt: string;
	  })
	| (BaseProps & {
			type: SpotifyAlbumType;
			addedAt?: never;
			album: SpotifyAlbum;
	  });

const CollectionTracklistItem = ({
	type,
	gridConfig = 'grid grid-cols-[2rem_1.5fr_5rem] gap-5',
	number,
	track,
	album,
	addedAt,
	contextUri,
}: Props) => {
	const dispatch = useAppDispatch();
	const {
		isActive,
		isExternal,
		isPlaying,
		device,
		context,
		item: itemNowPlaying,
	} = useAppSelector(getNowPlaying);
	const { deviceId: localDeviceId } = useAppSelector((state) => state.player);

	const isActiveTrack =
		itemNowPlaying?.id === track.id && context.uri === contextUri;
	const isNowPlaying = isActiveTrack && isPlaying;

	const formattedAddedAt = useMemo(() => {
		if (type !== 'playlist' || !addedAt) {
			return;
		}
		const weeksAgo = dayjs().diff(dayjs(addedAt), 'weeks');
		return weeksAgo > 4
			? dayjs(addedAt).format('D MMM YYYY')
			: weeksAgo >= 1
			? `${weeksAgo} week${weeksAgo > 1 ? 's' : ''} ago`
			: dayjs(addedAt).fromNow();
	}, [type, addedAt]);

	const playItem = useCallback(async () => {
		const deviceId = isActive && isExternal ? device.id : localDeviceId;
		await dispatch(
			play({ deviceId, contextUri, offset: { position: number - 1 } })
		);
		if (isExternal) {
			const externalTrackData = { ...track, ...(album && { album }) };
			dispatch(
				setPlaybackState({
					track: externalTrackData,
					context: { uri: contextUri },
				})
			);
		}
	}, [
		isActive,
		isExternal,
		device,
		localDeviceId,
		track,
		album,
		contextUri,
		number,
		dispatch,
	]);

	return (
		<div
			className={`group h-16 px-4 py-2 ${gridConfig} hover:bg-[#ffffff1a] rounded-md items-center font-funnel`}
			onDoubleClick={playItem}
		>
			{isNowPlaying ? (
				<img src="/eq-animated.gif" className="h-4 w-4 ml-2.5"></img>
			) : (
				<span
					className={`mr-1 text-right group-hover:text-white ${
						isActiveTrack
							? 'text-spotify-green'
							: 'text-neutral-400'
					}`}
				>
					{number}
				</span>
			)}
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
					<span
						className={`${
							isActiveTrack ? 'text-spotify-green' : ''
						} truncate`}
					>
						{track.name}
					</span>
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
									prefetch={false}
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
						prefetch={false}
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
