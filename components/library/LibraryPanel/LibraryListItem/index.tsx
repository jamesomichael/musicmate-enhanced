import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FaVolumeHigh } from 'react-icons/fa6';
import { IoIosMusicalNotes, IoIosPlay, IoIosPause } from 'react-icons/io';
import { BsFillPinAngleFill } from 'react-icons/bs';

const LibraryListItem = ({
	href,
	imageUrl,
	name,
	secondaryText,
	isPinned = false,
	isActive = false,
	isPlaying = false,
	onPlay,
	onPause,
	hasCircularImage = false,
	highlightOnRoute = true,
}: {
	href: string;
	imageUrl?: string;
	name: string;
	secondaryText?: string;
	isPinned?: boolean;
	isActive?: boolean;
	isPlaying?: boolean;
	onPlay: (e: React.MouseEvent<SVGElement>) => void;
	onPause: (e: React.MouseEvent<SVGElement>) => void;
	hasCircularImage?: boolean;
	highlightOnRoute?: boolean;
}) => {
	const pathname = usePathname();
	return (
		<Link
			href={href}
			className={`${
				highlightOnRoute && href === pathname
					? 'bg-[#ffffff1a] hover:bg-neutral-700'
					: 'hover:bg-neutral-800'
			} group transition-all duration-200 hover:cursor-pointer flex justify-between items-center gap-2 p-2 h-16 rounded-md`}
		>
			<div className="relative h-full flex items-center gap-2 truncate">
				<div className="relative h-full aspect-square rounded-md">
					{imageUrl ? (
						<div
							className={`relative h-full aspect-square bg-cover bg-center ${
								hasCircularImage ? 'rounded-full' : 'rounded-md'
							}`}
							style={{
								backgroundImage: `url(${imageUrl})`,
							}}
						></div>
					) : (
						<div
							className={`relative h-full flex justify-center items-center aspect-square bg-neutral-800 ${
								hasCircularImage ? 'rounded-full' : 'rounded-md'
							}`}
						>
							<IoIosMusicalNotes
								size={27}
								className="text-neutral-400"
							/>
						</div>
					)}
					<div
						className={`hidden group-hover:flex absolute inset-0 z-50 bg-black/50 justify-center items-center transition-all duration-150 ${
							hasCircularImage ? 'rounded-full' : 'rounded-md'
						}`}
					>
						{isPlaying ? (
							<IoIosPause
								onClick={onPause}
								className="h-7 w-7 text-white active:scale-95"
							/>
						) : (
							<IoIosPlay
								onClick={onPlay}
								className="h-7 w-7 text-white active:scale-95"
							/>
						)}
					</div>
				</div>
				<div className="flex flex-col justify-center truncate">
					<span
						className={`font-funnel truncate ${
							isActive ? 'text-spotify-green' : 'text-white'
						}`}
					>
						{name}
					</span>
					{secondaryText && (
						<div className="flex items-center gap-1">
							{isPinned && (
								<BsFillPinAngleFill className="text-spotify-green" />
							)}
							<span className="truncate font-funnel text-sm text-neutral-400">
								{secondaryText}
							</span>
						</div>
					)}
				</div>
			</div>
			{isPlaying && (
				<div className="flex px-2 text-spotify-green">
					<FaVolumeHigh className="h-5 w-5" />
				</div>
			)}
		</Link>
	);
};

export default LibraryListItem;
