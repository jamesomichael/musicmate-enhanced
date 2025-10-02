import React from 'react';

const DesktopLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex flex-col h-full">
			<div className="h-14">
				<div className="h-full bg-blue-200">NAVBAR</div>
			</div>
			<div className="flex-1 p-2 h-full overflow-hidden">
				<div className="h-full grid grid-cols-[auto_1fr] gap-2">
					<div className="bg-yellow-400 w-72 rounded-md">
						LIBRARY PANEL
					</div>
					<div className="bg-red-500 rounded-md overflow-y-scroll">
						{children}
					</div>
				</div>
			</div>
			<div className="bg-purple-500 h-16">PLAYER CONTAINER</div>
		</div>
	);
};

export default DesktopLayout;
