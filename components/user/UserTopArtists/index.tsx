'use client';
import React from 'react';

import ShowcaseGrid from '@/components/shared/ShowcaseGrid';
import ArtistCard from '@/components/artist/ArtistCard';
import Loader from '@/components/shared/Loader';
import Tab from '@/components/shared/Tab';
import InfoMessage from '@/components/shared/InfoMessage';

import useUserTopArtists from '@/hooks/user/useUserTopArtists';
import useTopItemPeriodTabs from '@/hooks/user/useTopItemPeriodTabs';

const UserTopArtists = () => {
	const {
		isLoading,
		artists,
		period: activePeriod,
		setPeriod,
	} = useUserTopArtists();
	const tabs = useTopItemPeriodTabs();
	return (
		<div className="flex flex-col gap-2">
			<span className="font-funnel font-bold text-2xl leading-none text-white">
				Top artists
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
				<div className="h-48">
					<Loader />
				</div>
			) : artists && artists.length > 0 ? (
				<ShowcaseGrid
					items={artists}
					maxItems={7}
					renderItem={(item) => (
						<ArtistCard
							id={item.id}
							imageUrl={item.images?.[0]?.url}
							name={item.name}
						/>
					)}
				/>
			) : (
				<div className="h-48">
					<InfoMessage label="No data for this period." />
				</div>
			)}
		</div>
	);
};

export default UserTopArtists;
