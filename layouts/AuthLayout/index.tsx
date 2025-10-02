import React from 'react';

import Footer from '@/components/shared/Footer';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<div className="h-screen">{children}</div>
			<Footer />
		</>
	);
};

export default AuthLayout;
