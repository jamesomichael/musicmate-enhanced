import React from 'react';

import HeroHeader from '../HeroHeader';
import CollectionControls from '@/components/collection/CollectionHeader/CollectionControls';

import type { SpotifyAlbumType } from '@/types/spotify';

const MediaHeader = ({
	imageUrl,
	type,
	height = 'h-72',
	title,
	contextUri,
	children,
	actions,
}: {
	imageUrl?: string;
	type: SpotifyAlbumType | 'playlist' | 'artist';
	height?: string;
	title: string;
	contextUri: string;
	children?: React.ReactNode;
	actions?: React.ReactNode;
}) => {
	return (
		<HeroHeader
			imageUrl={imageUrl}
			actions={
				<>
					<CollectionControls contextUri={contextUri} />
					{actions}
				</>
			}
			type={type}
			title={title}
			height={height}
		>
			{children}
		</HeroHeader>
	);
};

export default MediaHeader;
