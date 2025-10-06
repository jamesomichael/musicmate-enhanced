import React from 'react';
import { cookies } from 'next/headers';

import Navbar from '@/components/navbar/Navbar';
import PlayerContainer from '@/components/player/PlayerContainer';

const DesktopLayout = async ({ children }: { children: React.ReactNode }) => {
	const cookieStore = await cookies();
	const accessToken = cookieStore.get('access_token')?.value;
	return (
		<div className="flex flex-col h-full">
			<div className="h-14">
				<Navbar />
			</div>
			<div className="flex-1 px-2 pb-2 h-full overflow-hidden">
				<div className="h-full grid grid-cols-[auto_1fr] gap-2">
					<div className="bg-yellow-400 w-72 rounded-md">
						LIBRARY PANEL
					</div>
					<div className="bg-spotify-black rounded-md overflow-y-scroll">
						{children}
					</div>
				</div>
			</div>
			{accessToken && <PlayerContainer accessToken={accessToken} />}
		</div>
	);
};

export default DesktopLayout;
