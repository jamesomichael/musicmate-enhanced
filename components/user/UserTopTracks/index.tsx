'use client';
import React from 'react';

import TracklistItem from '@/components/tracklist/TracklistItem';
import Loader from '@/components/shared/Loader';
import Tab from '@/components/shared/Tab';
import InfoMessage from '@/components/shared/InfoMessage';

import useUserTopTracks from '@/hooks/user/useUserTopTracks';
import useTopItemPeriodTabs from '@/hooks/user/useTopItemPeriodTabs';

const UserTopTracks = () => {
	const {
		isLoading,
		tracks,
		period: activePeriod,
		setPeriod,
	} = useUserTopTracks();
	const tabs = useTopItemPeriodTabs();
	return (
		<div className="flex flex-col gap-2">
			<span className="font-funnel font-bold text-2xl leading-none text-white">
				Top tracks
			</span>
			<span className="font-funnel text-sm text-neutral-300">
				Only visible to you
			</span>
			<div className="flex gap-2">
				{tabs.map(({ label, period }) => (
					<Tab
						key={period}
						label={label}
						onClick={() => setPeriod(period)}
						isActive={activePeriod === period}
					/>
				))}
			</div>
			{isLoading ? (
				<div className="h-80">
					<Loader />
				</div>
			) : tracks && tracks.length > 0 ? (
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
			) : (
				<div className="h-80">
					<InfoMessage label="No data for this period." />
				</div>
			)}
		</div>
	);
};

export default UserTopTracks;
