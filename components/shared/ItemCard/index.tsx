import React from 'react';
import Link from 'next/link';

import { IoIosMusicalNotes } from 'react-icons/io';
import { FaRegUser } from 'react-icons/fa6';

import type { SpotifyAlbumType } from '@/types/spotify';

const ItemCard = ({
	type,
	href,
	imageUrl,
	name,
	children,
}: {
	type: SpotifyAlbumType | 'playlist' | 'artist';
	href: string;
	imageUrl?: string;
	name: string;
	children?: React.ReactNode;
}) => {
	const userTypes = ['user', 'artist'];
	return (
		<Link
			href={href}
			className="p-3 w-auto h-fit hover:bg-neutral-800 rounded-md grid grid-rows-[1fr_auto] gap-2 xl:gap-2.5"
		>
			{imageUrl ? (
				<div
					className={`aspect-square bg-cover bg-center ${
						userTypes.includes(type) ? 'rounded-full' : 'rounded-md'
					}`}
					style={{
						backgroundImage: `url(${imageUrl})`,
					}}
				></div>
			) : (
				<div
					className={`flex justify-center items-center aspect-square bg-neutral-800 ${
						userTypes.includes(type) ? 'rounded-full' : 'rounded-md'
					}`}
				>
					{userTypes.includes(type) ? (
						<FaRegUser className="w-20 h-20 text-neutral-400" />
					) : (
						<IoIosMusicalNotes className="w-20 h-20 text-neutral-400" />
					)}
				</div>
			)}
			<div className="h-16 xl:h-20 flex flex-col gap-0.5 font-funnel">
				<span className="line-clamp-2 leading-5 font-medium text-white hover:underline">
					{name}
				</span>
				{children && (
					<div className="text-sm text-neutral-400">{children}</div>
				)}
			</div>
		</Link>
	);
};

export default ItemCard;
