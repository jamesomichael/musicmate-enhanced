import React from 'react';

import DesktopLayout from './DesktopLayout';
import MobileLayout from './MobileLayout';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="overflow-auto h-screen">
			<div className="h-full hidden md:block">
				<DesktopLayout>{children}</DesktopLayout>
			</div>
			<div className="h-full block md:hidden">
				<MobileLayout>{children}</MobileLayout>
			</div>
		</div>
	);
};

export default AppLayout;
