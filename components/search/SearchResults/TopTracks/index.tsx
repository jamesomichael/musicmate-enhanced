import React from 'react';

import TracklistItem from '@/components/tracklist/TracklistItem';

import { useAppSelector } from '@/redux/hooks';
import { isUserPremium } from '@/redux/slices/userSlice';

import type { SpotifyTrack } from '@/types/spotify';

const TopTracks = ({ tracks }: { tracks: SpotifyTrack[] }) => {
	const userHasPremium = useAppSelector(isUserPremium);
	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center gap-2 text-white">
				<span className="font-funnel text-2xl font-bold">Songs</span>
			</div>
			<div className="flex flex-col">
				{tracks?.slice(0, 4).map((track, idx) => {
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
							userHasPremium={userHasPremium}
							gridConfig="-ml-2 md:grid md:grid-cols-[2rem_1.25fr_1fr_5rem] gap-4"
						/>
					);
				})}
			</div>
		</div>
	);
};

export default TopTracks;
