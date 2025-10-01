import type { Metadata } from 'next';
import StoreProvider from '@/redux/StoreProvider';

import '../globals.css';

import Footer from '@/components/shared/Footer';

export const metadata: Metadata = {
	title: 'musicmate',
	description: 'musicmate',
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<StoreProvider>
			<html lang="en">
				<body className="bg-black select-none antialiased">
					<div className="min-h-screen h-screen">{children}</div>
					<Footer />
				</body>
			</html>
		</StoreProvider>
	);
}
