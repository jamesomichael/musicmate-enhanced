import React from 'react';
import Link from 'next/link';

import { FaPodcast } from 'react-icons/fa6';
import { FiLock } from 'react-icons/fi';

import FadeInSlide from '@/components/shared/FadeInSlide';

import { useAppSelector } from '@/redux/hooks';
import { getNowPlaying } from '@/redux/slices/playerSlice';

import type { SpotifyArtist } from '@/types/spotify';

const NowPlaying = () => {
	const {
		isPodcast = false,
		isPrivate = false,
		item,
	} = useAppSelector(getNowPlaying);

	return (
		<div className="flex items-center gap-3 overflow-hidden py-3 pr-8">
			{isPrivate ? (
				<div className="flex items-center gap-2">
					<div className="h-9 flex justify-center items-center aspect-square rounded-full bg-gradient-to-b from-blue-600 to-blue-800">
						<FiLock className="w-4 h-4 text-white" />
					</div>
					<span className="font-funnel font-medium text-neutral-300 leading-none">
						Session is private.
					</span>
				</div>
			) : isPodcast ? (
				<div className="flex items-center gap-1.5">
					<div className="h-9 flex justify-center items-center aspect-square rounded-full bg-gradient-to-b from-green-900 to-green-950">
						<FaPodcast className="w-4 h-4 text-spotify-green" />
					</div>
					<span className="font-funnel font-medium text-neutral-300 leading-none">
						Podcasts are not currently supported.
					</span>
				</div>
			) : (
				<>
					<Link
						href={`/album/${item.album.id}`}
						className="h-full bg-cover bg-center aspect-square bg-black rounded-md"
						style={{
							backgroundImage: `url(${item.album?.images?.[0].url})`,
						}}
					></Link>
					<div className="flex flex-col w-full overflow-hidden">
						<FadeInSlide
							key={item.id}
							href={`/album/${item.album.id}`}
							className="leading-5 truncate hover:underline font-funnel font-medium text-white text-base"
						>
							{item.name}
						</FadeInSlide>

						<div className="truncate overflow-hidden w-full">
							{item.artists.map(
								(artist: SpotifyArtist, idx: number) => (
									<span
										key={`${idx}_${artist.id}`}
										className="font-funnel text-neutral-400 text-sm"
									>
										<Link
											href={`/artist/${artist.id}`}
											className="hover:text-white hover:underline"
										>
											{artist.name}
										</Link>
										{idx < item.artists.length - 1 && ', '}
									</span>
								)
							)}
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default NowPlaying;
