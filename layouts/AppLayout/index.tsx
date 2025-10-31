'use client';
import React from 'react';

import DesktopLayout from './DesktopLayout';
import MobileLayout from './MobileLayout';

import useLibrary from '@/hooks/useLibrary';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
	useLibrary();
	return (
		<div className="overflow-auto h-screen">
			<div className="h-full hidden lg:block">
				<DesktopLayout>{children}</DesktopLayout>
			</div>
			<div className="h-full block lg:hidden">
				<MobileLayout>{children}</MobileLayout>
			</div>
		</div>
	);
};

export default AppLayout;
