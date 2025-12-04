import React from 'react';

import TracklistItem from '../TracklistItem';

import useToggle from '@/hooks/shared/useToggle';

import type { SpotifyTrack } from '@/types/spotify';

const ExpandableTracklist = ({
	tracks,
	maxItems = tracks.length,
	showArtists = true,
}: {
	tracks: SpotifyTrack[];
	maxItems?: number;
	showArtists?: boolean;
}) => {
	const { value: shouldShowMore, toggle: toggleShowMore } = useToggle(false);
	return (
		<div className="flex flex-col">
			<div className="flex flex-col">
				{tracks
					?.slice(0, shouldShowMore ? maxItems : 5)
					.map((track, idx) => {
						return (
							<TracklistItem
								key={`${idx}_${track.id}`}
								id={track.id}
								number={idx + 1}
								name={track.name}
								duration={track.duration_ms}
								artists={
									showArtists ? track.artists : undefined
								}
								isExplicit={track.explicit}
								contextUri={track.album.uri}
								position={track.track_number - 1}
								showAlbumArt={true}
								album={track.album}
								gridConfig="-ml-2 md:grid md:grid-cols-[2rem_1.25fr_1fr_5rem] gap-4"
							/>
						);
					})}
			</div>
			<span
				onClick={toggleShowMore}
				className="mt-3 md:pl-5 font-funnel text-sm font-bold text-neutral-400 hover:text-white"
			>
				{shouldShowMore ? 'Show less' : 'Show more'}
			</span>
		</div>
	);
};

export default ExpandableTracklist;
