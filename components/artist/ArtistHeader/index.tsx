import React from 'react';

import MediaHeader from '@/components/shared/MediaHeader';
import GenreTag from './GenreTag';

const ArtistHeader = ({
	imageUrl,
	name,
	followers,
	contextUri,
	genres = [],
}: {
	imageUrl?: string;
	name: string;
	followers: number;
	contextUri: string;
	genres?: string[];
}) => {
	return (
		<MediaHeader
			imageUrl={imageUrl}
			type="artist"
			title={name}
			contextUri={contextUri}
			height="h-80"
		>
			<div className="flex flex-wrap items-center gap-2">
				<span className="font-funnel text-sm text-neutral-200">
					{followers.toLocaleString()} followers
				</span>
				{genres.length > 0 && (
					<div className="flex items-center gap-2">
						<span className="font-funnel text-neutral-400">•</span>
						{genres.map((genre) => {
							return <GenreTag key={genre} genre={genre} />;
						})}
					</div>
				)}
			</div>
		</MediaHeader>
	);
};

export default ArtistHeader;
