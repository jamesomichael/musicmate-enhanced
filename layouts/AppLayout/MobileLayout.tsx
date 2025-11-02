import React from 'react';

import MobilePlayerContainer from '@/components/mobile/MobilePlayerContainer';
import TabBar from '@/components/mobile/TabBar';

const MobileLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-full bg-spotify-black flex flex-col overflow-hidden">
			<div className="flex-1 overflow-auto pb-[calc(5rem + env(safe-area-inset-bottom))]">
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
