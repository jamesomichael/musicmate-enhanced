'use client';
import React, { useState } from 'react';

import Loader from '@/components/shared/Loader';
import Tab from '@/components/shared/Tab';
import TrackResults from './TrackResults';
import AllResults from './AllResults';

import useSearchTabs from '@/hooks/useSearchTabs';

import type { SearchResultsData, SearchTabType } from '@/types/search';

const SearchResults = ({ data }: { data: SearchResultsData }) => {
	const [activeTab, setActiveTab] = useState<SearchTabType>('results');
	const tabs = useSearchTabs(data);

	const changeActiveTab = (type: SearchTabType) => {
		setActiveTab(type);
	};

	const currentTab = tabs[activeTab];

	if (!currentTab) {
		return null;
	}

	const { tracks, albums, artists, playlists } = data;

	return (
		<div className="h-full flex flex-col gap-6 p-6">
			<div className="flex items-center gap-2">
				{Object.entries(tabs).map(([type, { label }]) => (
					<Tab
						key={type}
						label={label}
						isActive={type === activeTab}
						onClick={() => changeActiveTab(type as SearchTabType)}
					/>
				))}
			</div>
			{activeTab === 'results' ? (
				<AllResults data={data} />
			) : activeTab === 'tracks' ? (
				<TrackResults tracks={tracks} />
			) : (
				<Loader />
			)}
		</div>
	);
};

export default SearchResults;
