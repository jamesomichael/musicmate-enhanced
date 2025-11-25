import '../globals.css';

import AuthLayout from '@/layouts/AuthLayout';

import StoreProvider from '@/redux/StoreProvider';

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<StoreProvider>
			<AuthLayout>{children}</AuthLayout>;
		</StoreProvider>
	);
}
