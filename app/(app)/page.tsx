'use client';
import Loader from '@/components/shared/Loader';
import Button from '@/components/shared/Button';

import useLogOut from '@/hooks/useLogOut';

export default function Home() {
	const logOut = useLogOut();

	return (
		<div className="h-full">
			<div className="h-44">
				<Loader />
			</div>
			<Button onClick={logOut} text="Log out" className="my-2" />
		</div>
	);
}
