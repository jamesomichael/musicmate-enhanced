'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Navigation = () => {
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

	return (
		<div className="flex items-center gap-3">
			<IoIosArrowBack
				onClick={navigateBack}
				size={30}
				className={`${
					canNavigateBack
						? 'text-gray-300 hover:text-white cursor-pointer'
						: 'opacity-50 cursor-not-allowed'
				}`}
			/>
			<IoIosArrowForward
				onClick={navigateForward}
				size={30}
				className={`${
					canNavigateForward
						? 'text-gray-300 hover:text-white cursor-pointer'
						: 'opacity-50 cursor-not-allowed'
				}`}
			/>
		</div>
	);
};

export default Navigation;
