import React from 'react';

import Navbar from '@/components/navbar/Navbar';
import PlayerContainer from '@/components/player/PlayerContainer';
import LibraryPanel from '@/components/library/LibraryPanel';

const DesktopLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex flex-col h-full">
			<div className="h-14">
				<Navbar />
			</div>
			<div className="flex-1 px-2 pb-2 h-full overflow-hidden">
				<div className="h-full grid grid-cols-[auto_1fr] gap-2">
					<div className="bg-spotify-black w-80 rounded-md overflow-hidden">
						<LibraryPanel />
					</div>
					<div className="bg-spotify-black rounded-md overflow-y-scroll">
						{children}
					</div>
				</div>
			</div>
			<PlayerContainer />
		</div>
	);
};

export default DesktopLayout;
