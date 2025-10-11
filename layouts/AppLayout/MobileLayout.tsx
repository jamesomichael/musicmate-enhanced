import React from 'react';

const MobileLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex flex-col h-full">
			<div className="h-full flex justify-center items-center">
				<span className="font-funnel text-spotify-green font-bold text-xl">
					Coming soon...
				</span>
			</div>
			{/* <div className="bg-orange-500 h-full">{children}</div> */}
		</div>
	);
};

export default MobileLayout;
