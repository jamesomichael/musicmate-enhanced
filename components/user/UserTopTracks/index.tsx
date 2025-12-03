'use client';
import React from 'react';

import TracklistItem from '@/components/tracklist/TracklistItem';
import Loader from '@/components/shared/Loader';

import useUserTopTracks from '@/hooks/useUserTopTracks';

const UserTopTracks = () => {
	const { isLoading, tracks } = useUserTopTracks();
	return isLoading ? (
		<div className="h-44">
			<Loader />
		</div>
	) : tracks && tracks.length > 0 ? (
		<div className="flex flex-col gap-2">
			<span className="font-funnel font-bold text-2xl leading-none text-white">
				Top tracks this year
			</span>
			<span className="font-funnel text-sm text-neutral-300">
				Only visible to you
			</span>
			<div className="flex flex-col">
				{tracks.slice(0, 10).map((track, idx) => {
					return (
						<TracklistItem
							key={`${idx}_${track.id}`}
							id={track.id}
							number={idx + 1}
							name={track.name}
							duration={track.duration_ms}
							artists={track.artists}
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
		</div>
	) : null;
};

export default UserTopTracks;
