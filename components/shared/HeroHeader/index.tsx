import React from 'react';

import { IoIosMusicalNotes } from 'react-icons/io';
import { FaRegUser } from 'react-icons/fa6';

import FadeInSlide from '../FadeInSlide';

import type { SpotifyAlbumType } from '@/types/spotify';

const HeroHeader = ({
	imageUrl,
	type,
	title,
	gradientFrom = 'from-neutral-600',
	gradientTo = 'to-neutral-800',
	height = 'h-fit md:h-72',
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
				className={`relative ${height} flex flex-col justify-center items-center md:items-end md:grid md:grid-cols-[auto_1fr] gap-6 p-4 pt-8 md:pt-4 lg:p-8 overflow-hidden`}
			>
				{imageUrl ? (
					<div
						className={`h-64 sm:h-96 md:h-full shadow-lg bg-cover bg-center aspect-square ${imageBorderRadius}`}
						style={{
							backgroundImage: `url(${imageUrl})`,
						}}
					></div>
				) : (
					<div
						className={`h-64 sm:h-96 md:h-full flex justify-center items-center aspect-square bg-neutral-800 ${imageBorderRadius}`}
					>
						{userTypes.includes(type) ? (
							<FaRegUser className="w-16 h-16 md:w-20 md:h-20 text-neutral-400" />
						) : (
							<IoIosMusicalNotes className="w-20 h-20 md:w-28 md:h-28 text-neutral-400" />
						)}
					</div>
				)}
				<div className="flex flex-col justify-end items-start gap-2 w-full overflow-hidden">
					<span className="capitalize leading-none font-funnel text-xs text-white">
						{type}
					</span>
					<FadeInSlide
						key={title}
						className="font-unbounded font-black text-white text-3xl md:text-4xl xl:leading-16 xl:text-[3.25rem] line-clamp-2"
					>
						{title}
					</FadeInSlide>
					<div>{children}</div>
				</div>
			</div>
			{actions && (
				<div className="relative h-fit md:h-24 flex items-center gap-4 md:gap-6 bg-gradient-to-b from-black/40 to-spotify-black px-4 pt-4 pb-2 lg:px-8 md:py-8">
					{actions}
				</div>
			)}
		</div>
	);
};

export default HeroHeader;
