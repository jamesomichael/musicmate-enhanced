import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

import { useAppDispatch } from '@/redux/hooks';
import { logOut } from '@/redux/slices/authSlice';

const useLogOut = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();

	const handleLogOut = useCallback(async () => {
		try {
			await dispatch(logOut());
			router.push('/login');
		} catch (err) {
			console.error('Logout failed', err);
		}
	}, [dispatch, router]);

	return handleLogOut;
};

export default useLogOut;
