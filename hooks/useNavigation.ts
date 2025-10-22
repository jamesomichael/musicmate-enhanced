import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const useNavigation = () => {
	const router = useRouter();
	const [canNavigateBack, setCanNavigateBack] = useState(false);
	const [canNavigateForward, setCanNavigateForward] = useState(false);

	const navigateBack = () => router.back();
	const navigateForward = () => router.forward();

	useEffect(() => {
		const checkHistory = () => {
			setCanNavigateBack(window.history.length > 1);
			setCanNavigateForward(window.history.length > 1);
		};

		checkHistory();
		window.addEventListener('popstate', checkHistory);
		return () => {
			window.removeEventListener('popstate', checkHistory);
		};
	}, []);

	return {
		canNavigateBack,
		navigateBack,
		canNavigateForward,
		navigateForward,
	};
};

export default useNavigation;
