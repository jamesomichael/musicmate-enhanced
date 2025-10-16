import React from 'react';
import Link from 'next/link';
import he from 'he';

import { IoIosMusicalNotes } from 'react-icons/io';

import type { Creator } from '@/types/collections';
import type { SpotifyAlbumType } from '@/types/spotify';

const CollectionHeader = ({
	type,
	imageUrl,
	title,
	description,
	totalFollowers,
	totalTracks,
	creators,
	gradientFrom = 'from-neutral-600',
	gradientTo = 'to-neutral-800',
	showControls = false,
	showBlurredBackground = true,
}: {
	type: SpotifyAlbumType | 'playlist';
	imageUrl?: string;
	title: string;
	description?: string;
	totalFollowers?: number;
	totalTracks: number;
	creators: Creator[];
	gradientFrom?: string;
	gradientTo?: string;
	showControls?: boolean;
	showBlurredBackground?: boolean;
}) => {
	return (
		<div
			className={`relative flex flex-col bg-gradient-to-b ${gradientFrom} ${gradientTo} overflow-hidden`}
		>
			{showBlurredBackground && (
				<>
					<div
						className="absolute inset-0 bg-cover bg-center blur-3xl"
						style={{
							backgroundImage: `url(${imageUrl})`,
						}}
					></div>
					<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/65"></div>
				</>
			)}
			<div className="relative h-72 grid grid-cols-[auto_1fr] gap-6 p-8">
				{imageUrl ? (
					<div
						className="shadow-lg bg-cover bg-center h-full aspect-square rounded-md"
						style={{
							backgroundImage: `url(${imageUrl})`,
						}}
					></div>
				) : (
					<div className="h-full flex justify-center items-center aspect-square rounded-md bg-neutral-800">
						<IoIosMusicalNotes className="w-28 h-28 text-neutral-400" />
					</div>
				)}
				<div className="flex flex-col justify-end gap-2 overflow-auto">
					<span className="capitalize leading-none font-funnel text-xs text-white">
						{type}
					</span>
					<span className="font-unbounded font-black text-white text-4xl xl:leading-16 xl:text-[3.25rem] line-clamp-2">
						{title}
					</span>
					{description && (
						<span className="font-funnel text-sm text-neutral-300">
							<span className="leading-5 font-medium line-clamp-2">
								{he.decode(description)}
							</span>
						</span>
					)}
					<div className="font-funnel text-sm flex items-center flex-wrap">
						{creators.map((creator, idx) => (
							<div
								key={creator.id}
								className={`font-bold text-white ${
									idx > 0
										? "before:content-['•'] before:mx-1"
										: ''
								}`}
							>
								<Link
									href={
										type === 'playlist'
											? `/user/${creator.id}`
											: `/artist/${creator.id}`
									}
									className="hover:underline"
								>
									{creator.name}
								</Link>
							</div>
						))}
						{totalFollowers && totalFollowers > 0 && (
							<div className="before:content-['•'] before:mx-1 text-neutral-300">
								<span>
									{totalFollowers.toLocaleString()}{' '}
									{totalFollowers === 1 ? 'save' : 'saves'}
								</span>
							</div>
						)}
						<div className="before:content-['•'] before:mx-1 text-neutral-300">
							<span>
								{totalTracks.toLocaleString()}{' '}
								{totalTracks === 1 ? 'song' : 'songs'}
							</span>
						</div>
					</div>
				</div>
			</div>
			{showControls && (
				<div className="relative h-24 bg-gradient-to-b from-black/40 to-spotify-black px-8 py-4">
					<div className="h-full aspect-square rounded-full bg-spotify-green"></div>
				</div>
			)}
		</div>
	);
};

export default CollectionHeader;
