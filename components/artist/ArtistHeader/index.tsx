import React from 'react';

import { FaRegUser } from 'react-icons/fa6';

import GenreTag from './GenreTag';

const ArtistHeader = ({
	imageUrl,
	name,
	followers,
	genres = [],
}: {
	imageUrl?: string;
	name: string;
	followers: number;
	genres?: string[];
}) => {
	return (
		<div className="relative h-80 grid grid-cols-[auto_1fr] gap-6 p-8 overflow-hidden">
			{imageUrl ? (
				<>
					<div
						className="absolute inset-0 bg-cover bg-center blur-3xl"
						style={{
							backgroundImage: `url(${imageUrl})`,
						}}
					></div>
					<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
					<div
						className="relative shadow-lg bg-cover bg-center h-full aspect-square rounded-full"
						style={{
							backgroundImage: `url(${imageUrl})`,
						}}
					></div>
				</>
			) : (
				<>
					<div className="absolute inset-0 bg-gradient-to-b from-neutral-600 to-neutral-800"></div>
					<div className="relative shadow-lg h-full flex justify-center items-center aspect-square rounded-full bg-neutral-800">
						<FaRegUser className="w-20 h-20 text-neutral-400" />
					</div>
				</>
			)}
			<div className="relative flex flex-col justify-end gap-2">
				<span className="leading-none font-funnel text-xs text-white">
					Artist
				</span>
				<span className="font-unbounded font-black text-white text-4xl xl:leading-16 xl:text-[3.25rem] line-clamp-2">
					{name}
				</span>
				<div className="flex flex-wrap items-center gap-2">
					<span className="font-funnel text-sm text-neutral-200">
						{followers.toLocaleString()} followers
					</span>
					{genres.length > 0 && (
						<div className="flex items-center gap-2">
							<span className="font-funnel text-neutral-400">
								•
							</span>
							{genres.map((genre) => {
								return <GenreTag key={genre} genre={genre} />;
							})}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ArtistHeader;
