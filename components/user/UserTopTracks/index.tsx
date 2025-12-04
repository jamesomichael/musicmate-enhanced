'use client';
import React from 'react';

import ExpandableTracklist from '@/components/tracklist/ExpandableTracklist';
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
				<ExpandableTracklist tracks={tracks} maxItems={10} />
			) : (
				<div className="h-80">
					<InfoMessage label="No data for this period." />
				</div>
			)}
		</div>
	);
};

export default UserTopTracks;
