import type { Metadata } from 'next';
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
		<html lang="en">
			<body className="min-h-screen h-screen bg-black select-none antialiased">
				{children}
			</body>
		</html>
	);
}
