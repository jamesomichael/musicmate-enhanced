'use client';
import React from 'react';

import { FaFire } from 'react-icons/fa6';

import TracklistItem from '@/components/tracklist/TracklistItem';

import useToggle from '@/hooks/useToggle';

import type { SpotifyTrack } from '@/types/spotify';

const ArtistTopTracks = ({
	tracks,
	contextUri,
}: {
	tracks: SpotifyTrack[];
	contextUri: string;
}) => {
	const { value: shouldShowMore, toggle: toggleShowMore } = useToggle(false);
	return (
		<div className="flex flex-col">
			<div className="flex items-center gap-2 text-white pb-4">
				<FaFire className="w-6 h-6" />
				<span className="font-funnel text-2xl font-bold">Popular</span>
			</div>
			<div className="flex flex-col">
				{tracks?.slice(0, shouldShowMore ? 10 : 5).map((track, idx) => {
					return (
						<TracklistItem
							key={`${idx}_${track.id}`}
							id={track.id}
							number={idx + 1}
							name={track.name}
							duration={track.duration_ms}
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

export default ArtistTopTracks;
