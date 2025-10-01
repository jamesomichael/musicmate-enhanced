import type { Metadata } from 'next';
import StoreProvider from '@/redux/StoreProvider';

import '../globals.css';

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
				<body className="select-none antialiased overflow-auto min-h-screen h-screen bg-black">
					<>
						<div className="hidden md:flex flex-col h-full">
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
							<div className="bg-purple-500 h-16">
								PLAYER CONTAINER
							</div>
						</div>
					</>
					<>
						<div className="flex md:hidden h-full">
							<div className="bg-orange-500 w-full">MOBILE</div>
						</div>
					</>
				</body>
			</html>
		</StoreProvider>
	);
}
