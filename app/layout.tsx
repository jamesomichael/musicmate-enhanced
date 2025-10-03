import './globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-black min-h-screen antialiased select-none">
				{children}
			</body>
		</html>
	);
}
