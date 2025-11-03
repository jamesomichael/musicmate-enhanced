import React from 'react';
import Link from 'next/link';
import he from 'he';

import MediaHeader from '@/components/shared/MediaHeader';

const PlaylistHeader = ({
	isLikedSongs = false,
	imageUrl,
	name,
	contextUri,
	description,
	owner,
	totalFollowers,
	totalTracks,
}: {
	isLikedSongs?: boolean;
	imageUrl?: string;
	name: string;
	contextUri: string;
	description?: string;
	owner: { id: string; displayName?: string | null };
	totalFollowers?: number;
	totalTracks: number;
}) => {
	return (
		<MediaHeader
			imageUrl={imageUrl}
			contextUri={contextUri}
			type="playlist"
			title={name}
			{...(isLikedSongs && {
				showBlurredBackground: false,
				gradientFrom: 'from-[#5038a0]',
				gradientTo: 'to-spotify-black/20',
			})}
		>
			<div className="flex flex-col justify-end gap-2">
				{description && (
					<span className="font-funnel text-sm text-neutral-300">
						<span className="leading-5 font-medium line-clamp-2">
							{he.decode(description)}
						</span>
					</span>
				)}
				<div className="font-funnel text-sm flex gap-2 md:gap-0 flex-col md:flex-row items-start md:flex-wrap">
					<Link
						href={`/user/${owner.id}`}
						className="hover:underline font-bold text-white"
					>
						{owner.displayName || owner.id}
					</Link>
					<div className="flex items-center text-xs md:text-sm">
						{totalFollowers && totalFollowers > 0 ? (
							<div className="after:content-['•'] after:mx-1 md:after:content-none md:before:content-['•'] md:before:mx-1 text-neutral-300">
								<span>
									{totalFollowers.toLocaleString()}{' '}
									{totalFollowers === 1 ? 'save' : 'saves'}
								</span>
							</div>
						) : null}
						<div className="md:before:content-['•'] md:before:mx-1 text-neutral-300">
							<span>
								{totalTracks.toLocaleString()}{' '}
								{totalTracks === 1 ? 'song' : 'songs'}
							</span>
						</div>
					</div>
				</div>
			</div>
		</MediaHeader>
	);
};

export default PlaylistHeader;
