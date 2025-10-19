import React from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';

import { IoIosMusicalNotes } from 'react-icons/io';

import type { SpotifyAlbumType } from '@/types/spotify';

const DiscographyItemCard = ({
	id,
	imageUrl,
	name,
	releaseDate,
	type,
}: {
	id: string;
	imageUrl?: string;
	name: string;
	releaseDate: string;
	type: SpotifyAlbumType;
}) => {
	return (
		<Link
			key={id}
			href={`/album/${id}`}
			className="p-3 w-auto h-fit hover:bg-neutral-800 rounded-md grid grid-rows-[1fr_auto] gap-2 xl:gap-2.5"
		>
			{imageUrl ? (
				<div
					className="aspect-square bg-cover bg-center rounded-md"
					style={{
						backgroundImage: `url(${imageUrl})`,
					}}
				></div>
			) : (
				<div className="flex justify-center items-center aspect-square bg-neutral-800 rounded-md">
					<IoIosMusicalNotes className="w-20 h-20 text-neutral-400" />
				</div>
			)}
			<div className="h-16 xl:h-20 flex flex-col gap-0.5 xl:gap-1 font-funnel">
				<span className="line-clamp-2 leading-5 font-medium text-white hover:underline">
					{name}
				</span>
				<div className="text-sm text-neutral-400">
					<span className="after:content-['•'] after:mx-1">
						{dayjs(releaseDate).year()}
					</span>
					<span className="capitalize font-medium">{type}</span>
				</div>
			</div>
		</Link>
	);
};

export default DiscographyItemCard;
