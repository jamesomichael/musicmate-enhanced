import React from 'react';

const MobileLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex flex-col h-full">
			<div className="bg-orange-500 h-full">{children}</div>
		</div>
	);
};

export default MobileLayout;
