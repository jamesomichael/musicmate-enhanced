'use client';
import React from 'react';
import Link from 'next/link';

import { FaRegStar } from 'react-icons/fa6';

import useFormattedDate from '@/hooks/useFormattedDate';

import type { SpotifyAlbum } from '@/types/spotify';

const FeaturedItem = ({ item }: { item: SpotifyAlbum }) => {
	const releaseDate = item.release_date;
	const releaseDatePrecision = item.release_date_precision;

	const formattedReleaseDate = useFormattedDate(
		releaseDate,
		releaseDatePrecision
	);

	return (
		<div className="flex flex-col">
			<div className="flex items-center gap-2 text-white pb-4">
				<FaRegStar className="w-6 h-6" />
				<span className="font-funnel text-2xl font-bold">Featured</span>
			</div>
			<Link
				href={`/album/${item.id}`}
				className="group relative flex justify-start items-end h-full gap-5 p-5 rounded-lg bg-cover bg-center"
				style={{ backgroundImage: `url(${item.images?.[0]?.url})` }}
			>
				<div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/95 group-hover:bg-black/25 transition-colors duration-150 rounded-lg"></div>
				<div
					className="relative h-44 aspect-square bg-cover bg-center rounded-md"
					style={{ backgroundImage: `url(${item.images?.[0]?.url})` }}
				></div>
				<div className="relative flex flex-col justify-center">
					<span className="hover:underline font-funnel font-bold text-white text-2xl line-clamp-3">
						{item.name}
					</span>
					<span className="font-funnel text-neutral-300 font-medium text-md">
						{formattedReleaseDate}
					</span>
					<span className="capitalize font-funnel text-sm text-neutral-400">
						{item.album_type}
					</span>
				</div>
			</Link>
		</div>
	);
};

export default FeaturedItem;
