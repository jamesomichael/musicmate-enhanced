import React from 'react';

import HeroHeader from '../HeroHeader';
import CollectionControls from '@/components/collection/CollectionControls';

import type { SpotifyAlbumType } from '@/types/spotify';

const MediaHeader = ({
	imageUrl,
	type,
	height = 'h-72',
	gradientFrom = 'from-neutral-600',
	gradientTo = 'to-neutral-800',
	title,
	contextUri,
	showBlurredBackground = true,
	children,
	actions,
}: {
	imageUrl?: string;
	type: SpotifyAlbumType | 'playlist' | 'artist';
	height?: string;
	gradientFrom?: string;
	gradientTo?: string;
	title: string;
	contextUri: string;
	showBlurredBackground?: boolean;
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
			gradientFrom={gradientFrom}
			gradientTo={gradientTo}
			showBlurredBackground={showBlurredBackground}
		>
			{children}
		</HeroHeader>
	);
};

export default MediaHeader;
