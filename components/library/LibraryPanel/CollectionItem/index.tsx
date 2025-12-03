import React from 'react';

import LibraryListItem from '../LibraryListItem';

import useCollectionPlayback from '@/hooks/useCollectionPlayback';

import type { SpotifyAlbumType } from '@/types/spotify';

const CollectionItem = ({
	type,
	uri,
	href,
	imageUrl,
	name,
	isPinned,
	secondaryText,
}: {
	type: SpotifyAlbumType | 'artist' | 'playlist';
	uri: string;
	href: string;
	imageUrl?: string;
	name: string;
	isPinned?: boolean;
	secondaryText?: string;
}) => {
	const { play, pause, isActiveCollection, isPlayingCollection } =
		useCollectionPlayback(uri);

	const handlePlay = (e: React.MouseEvent<SVGElement>) => {
		e.stopPropagation();
		e.preventDefault();
		play();
	};

	const handlePause = (e: React.MouseEvent<SVGElement>) => {
		e.stopPropagation();
		e.preventDefault();
		pause();
	};

	return (
		<LibraryListItem
			href={href}
			imageUrl={imageUrl}
			name={name}
			secondaryText={secondaryText}
			isPinned={isPinned}
			isActive={isActiveCollection}
			isPlaying={isPlayingCollection}
			onPlay={handlePlay}
			onPause={handlePause}
			hasCircularImage={type === 'artist'}
		/>
	);
};

export default CollectionItem;
