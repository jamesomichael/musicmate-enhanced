import React from 'react';

import MobilePlayerContainer from '@/components/player/MobilePlayerContainer';
import TabBar from '@/components/tabbar/TabBar';

import { useAppSelector } from '@/redux/hooks';
import { getNowPlaying } from '@/redux/slices/playerSlice';

const MobileLayout = ({ children }: { children: React.ReactNode }) => {
	const { isActive: playerIsActive, item } = useAppSelector(getNowPlaying);
	return (
		<div className="h-full bg-spotify-black flex flex-col overflow-hidden">
			<div
				className={`flex-1 overflow-auto ${
					playerIsActive && item ? 'mb-[8.5rem]' : 'mb-20'
				}`}
			>
				{children}
			</div>
			<MobilePlayerContainer />
			<div className="absolute bottom-0 w-full h-20 pb-[env(safe-area-inset-bottom)]">
				<TabBar />
			</div>
		</div>
	);
};

export default MobileLayout;
