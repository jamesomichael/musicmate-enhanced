import React from 'react';

import LibraryListItem from '../LibraryListItem';

import useTrackPlayback from '@/hooks/player/useTrackPlayback';

const TrackItem = ({
	id,
	uri,
	contextUri,
	href,
	imageUrl,
	name,
	isPinned,
	secondaryText,
}: {
	id: string;
	uri: string;
	contextUri: string;
	href: string;
	imageUrl?: string;
	name: string;
	isPinned?: boolean;
	secondaryText?: string;
}) => {
	const { isNowPlaying, isActiveTrack, playTrack, pauseTrack } =
		useTrackPlayback({
			trackId: id,
			contextUri,
			uri,
		});

	const handlePlay = (e: React.MouseEvent<SVGElement>) => {
		e.stopPropagation();
		e.preventDefault();
		playTrack();
	};

	const handlePause = (e: React.MouseEvent<SVGElement>) => {
		e.stopPropagation();
		e.preventDefault();
		pauseTrack();
	};

	return (
		<LibraryListItem
			href={href}
			imageUrl={imageUrl}
			name={name}
			secondaryText={secondaryText}
			isPinned={isPinned}
			isActive={isActiveTrack}
			isPlaying={isNowPlaying}
			onPlay={handlePlay}
			onPause={handlePause}
			highlightOnRoute={false}
		/>
	);
};

export default TrackItem;
