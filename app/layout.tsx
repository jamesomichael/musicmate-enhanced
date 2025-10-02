import './globals.css';

import StoreProvider from '@/redux/StoreProvider';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-black min-h-screen antialiased select-none">
				<StoreProvider>{children}</StoreProvider>
			</body>
		</html>
	);
}
