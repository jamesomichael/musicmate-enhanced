import React from 'react';

import { IoIosMusicalNotes } from 'react-icons/io';
import { FaRegUser } from 'react-icons/fa6';

import type { SpotifyAlbumType } from '@/types/spotify';

const HeroHeader = ({
	imageUrl,
	type,
	title,
	gradientFrom = 'from-neutral-600',
	gradientTo = 'to-neutral-800',
	height = 'h-72',
	showBlurredBackground = true,
	children,
	actions,
}: {
	imageUrl?: string;
	type: SpotifyAlbumType | 'artist' | 'playlist' | 'profile';
	title: string;
	gradientFrom?: string;
	gradientTo?: string;
	height?: string;
	showBlurredBackground?: boolean;
	children: React.ReactNode;
	actions?: React.ReactNode;
}) => {
	const userTypes = ['artist', 'profile'];

	const imageBorderRadius = userTypes.includes(type)
		? 'rounded-full'
		: 'rounded-md';

	return (
		<div
			className={`relative flex flex-col bg-gradient-to-b ${gradientFrom} ${gradientTo} overflow-hidden`}
		>
			{imageUrl && showBlurredBackground && (
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
			<div
				className={`relative ${height} grid grid-cols-[auto_1fr] gap-6 p-8 overflow-hidden`}
			>
				{imageUrl ? (
					<div
						className={`shadow-lg bg-cover bg-center h-full aspect-square ${imageBorderRadius}`}
						style={{
							backgroundImage: `url(${imageUrl})`,
						}}
					></div>
				) : (
					<div
						className={`h-full flex justify-center items-center aspect-square bg-neutral-800 ${imageBorderRadius}`}
					>
						{userTypes.includes(type) ? (
							<FaRegUser className="w-20 h-20 text-neutral-400" />
						) : (
							<IoIosMusicalNotes className="w-28 h-28 text-neutral-400" />
						)}
					</div>
				)}
				<div className="flex flex-col justify-end gap-2 overflow-auto">
					<span className="capitalize leading-none font-funnel text-xs text-white">
						{type}
					</span>
					<span className="font-unbounded font-black text-white text-4xl xl:leading-16 xl:text-[3.25rem] line-clamp-2">
						{title}
					</span>
					<div>{children}</div>
				</div>
			</div>
			{actions && (
				<div className="relative h-24 flex items-center gap-6 bg-gradient-to-b from-black/40 to-spotify-black px-8 py-4">
					{actions}
				</div>
			)}
		</div>
	);
};

export default HeroHeader;
