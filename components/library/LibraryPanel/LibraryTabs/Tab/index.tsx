import React from 'react';

import { useAppSelector } from '@/redux/hooks';
import { useAppDispatch } from '@/redux/hooks';
import { setActiveTab } from '@/redux/slices/librarySlice';

import type { LibraryTabType } from '@/types/library';

const Tab = ({ type, label }: { type: LibraryTabType; label: string }) => {
	const { activeTab } = useAppSelector((state) => state.library.panel);
	const dispatch = useAppDispatch();

	const changeTab = () => {
		dispatch(setActiveTab(type));
	};

	return (
		<div
			onClick={changeTab}
			className={`${
				activeTab === type
					? 'bg-white'
					: 'hover:cursor-pointer hover:bg-neutral-600 bg-neutral-700'
			} transition-all duration-150 rounded-full px-3 py-2 flex items-center whitespace-nowrap`}
		>
			<span
				className={`${
					activeTab === type ? 'text-black font-medium' : 'text-white'
				} leading-none text-sm font-funnel`}
			>
				{label}
			</span>
		</div>
	);
};

export default Tab;
