'use client';
import React, { useState } from 'react';
import Link from 'next/link';

import { FaRecordVinyl } from 'react-icons/fa6';

import Tab from '@/components/shared/Tab';
import ShowcaseGrid from '@/components/shared/ShowcaseGrid';
import DiscographyCard from './DiscographyCard';

import useDiscographyTabs from '@/hooks/useDiscographyTabs';

import type { ArtistDiscography, DiscographyTabType } from '@/types/artists';

const Discography = ({
	artistId,
	data,
	title = 'Discography',
	isExpandable = false,
	maxItems,
	defaultTab = 'albums',
}: {
	artistId: string;
	data: ArtistDiscography;
	title?: string;
	isExpandable?: boolean;
	maxItems?: number;
	defaultTab?: DiscographyTabType;
}) => {
	const [activeTab, setActiveTab] = useState<DiscographyTabType>(defaultTab);
	const tabs = useDiscographyTabs(data);

	const changeActiveTab = (type: DiscographyTabType) => {
		setActiveTab(type);
	};

	const currentTab = tabs[activeTab];

	if (!currentTab) {
		return null;
	}

	return (
		<div className="flex flex-col">
			<div className="flex justify-between items-center pb-4">
				<div className="flex items-center gap-2 text-white">
					<FaRecordVinyl className="w-6 h-6" />
					<Link
						href={
							isExpandable
								? `/artist/${artistId}/discography?tab=${activeTab}`
								: `/artist/${artistId}`
						}
						className="font-funnel text-2xl font-bold hover:underline"
					>
						{title}
					</Link>
				</div>
				{isExpandable && (
					<Link
						href={`/artist/${artistId}/discography?tab=${activeTab}`}
						className="px-2 font-funnel font-bold text-sm text-neutral-400 hover:underline self-end"
					>
						Show all
					</Link>
				)}
			</div>
			<div className="flex flex-col gap-3">
				<div className="flex items-center gap-2">
					{Object.entries(tabs).map(([type, { label }]) => (
						<Tab
							key={type}
							label={label}
							isActive={type === activeTab}
							onClick={() =>
								changeActiveTab(type as DiscographyTabType)
							}
						/>
					))}
				</div>
				<ShowcaseGrid
					items={currentTab.data.items}
					maxItems={maxItems}
					renderItem={(item) => (
						<DiscographyCard
							key={item.id}
							id={item.id}
							imageUrl={item.images?.[0]?.url}
							name={item.name}
							releaseDate={item.release_date}
							type={item.album_type}
						/>
					)}
				/>
			</div>
		</div>
	);
};

export default Discography;
