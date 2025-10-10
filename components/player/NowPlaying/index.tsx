import React from 'react';
import Link from 'next/link';

import { useAppSelector } from '@/redux/hooks';
import { getNowPlaying } from '@/redux/slices/playerSlice';

import type { SpotifyArtist } from '@/types/spotify';

const NowPlaying = () => {
	const { isPodcast = false, item } = useAppSelector(getNowPlaying);

	return (
		<div className="flex items-center gap-3 overflow-hidden py-3 pr-8">
			{isPodcast ? (
				<span className="font-funnel font-medium text-white">
					Podcasts are not currently supported.
				</span>
			) : (
				<>
					<div
						className="h-full bg-cover bg-center aspect-square bg-black rounded-md"
						style={{
							backgroundImage: `url(${item.album.images[0].url})`,
						}}
					></div>
					<div className="flex flex-col overflow-hidden">
						<span className="leading-5 truncate font-funnel font-medium text-white text-base">
							{item.name}
						</span>

						<div className="truncate overflow-hidden w-full">
							{item.artists.map(
								(artist: SpotifyArtist, idx: number) => (
									<span
										key={artist.id}
										className="font-funnel text-neutral-400 text-sm"
									>
										<Link
											href={`/artists/${artist.id}`}
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
