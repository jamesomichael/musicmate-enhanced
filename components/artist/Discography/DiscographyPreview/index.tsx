'use client';
import React, { useState } from 'react';

import { FaRecordVinyl } from 'react-icons/fa6';

import Tab from '@/components/shared/Tab';
import DiscographyItemCard from '../DiscographyItemCard';

import useDiscographyTabs from '@/hooks/useDiscographyTabs';

import type { ArtistDiscography } from '@/types/artists';

type TabType = 'albums' | 'singles' | 'compilations';

const DiscographyPreview = ({ data }: { data: ArtistDiscography }) => {
	const [activeTab, setActiveTab] = useState<TabType>('albums');
	const tabs = useDiscographyTabs(data);

	const changeActiveTab = (type: TabType) => {
		setActiveTab(type);
	};

	const currentTab = tabs[activeTab];

	if (!currentTab) {
		return null;
	}

	return (
		<div className="flex flex-col">
			<div className="flex items-center gap-2 text-white pb-4">
				<FaRecordVinyl className="w-6 h-6" />
				<span className="font-funnel text-2xl font-bold">
					Discography
				</span>
			</div>
			<div className="flex flex-col gap-3">
				<div className="flex items-center gap-2">
					{Object.entries(tabs).map(([type, { label }]) => (
						<Tab
							key={type}
							label={label}
							isActive={type === activeTab}
							onClick={() => changeActiveTab(type as TabType)}
						/>
					))}
				</div>
				<div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7">
					{currentTab.data.items.slice(0, 7).map((item) => (
						<DiscographyItemCard
							key={item.id}
							id={item.id}
							imageUrl={item.images?.[0]?.url}
							name={item.name}
							releaseDate={item.release_date}
							type={item.album_type}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default DiscographyPreview;
