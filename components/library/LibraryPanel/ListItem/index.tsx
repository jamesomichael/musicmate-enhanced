import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { IoIosMusicalNotes } from 'react-icons/io';
import { BsFillPinAngleFill } from 'react-icons/bs';

const ListItem = ({
	type,
	href,
	imageUrl,
	name,
	isPinned,
	secondaryText,
}: {
	type: 'artist' | 'album' | 'playlist' | 'track';
	href: string;
	imageUrl?: string;
	name: string;
	isPinned?: boolean;
	secondaryText?: string;
}) => {
	const pathname = usePathname();
	return (
		<Link
			href={href}
			className={`${
				href === pathname
					? 'bg-[#ffffff1a] hover:bg-neutral-700'
					: 'hover:bg-neutral-800'
			} transition-all duration-200 hover:cursor-pointer flex items-center gap-2 p-2 h-16 rounded-md`}
		>
			{imageUrl ? (
				<div
					className={`h-full aspect-square bg-cover bg-center ${
						type === 'artist' ? 'rounded-full' : 'rounded-md'
					}`}
					style={{
						backgroundImage: `url(${imageUrl})`,
					}}
				></div>
			) : (
				<div
					className={`h-full flex justify-center items-center aspect-square bg-neutral-800 ${
						type === 'artist' ? 'rounded-full' : 'rounded-md'
					}`}
				>
					<IoIosMusicalNotes size={27} className="text-neutral-400" />
				</div>
			)}
			<div className="flex flex-col justify-center truncate">
				<span className="font-funnel truncate">{name}</span>
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
		</Link>
	);
};

export default ListItem;
