'use client';
import React from 'react';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import useNavigation from '@/hooks/shared/useNavigation';

const Navigation = () => {
	const {
		canNavigateBack,
		canNavigateForward,
		navigateBack,
		navigateForward,
	} = useNavigation();

	return (
		<div className="flex items-center gap-3">
			<IoIosArrowBack
				onClick={navigateBack}
				size={30}
				className={`${
					canNavigateBack
						? 'transition-all duration-200 text-neutral-400 hover:text-white cursor-pointer'
						: 'opacity-50 cursor-not-allowed'
				}`}
			/>
			<IoIosArrowForward
				onClick={navigateForward}
				size={30}
				className={`${
					canNavigateForward
						? 'transition-all duration-200 text-neutral-400 hover:text-white cursor-pointer'
						: 'opacity-50 cursor-not-allowed'
				}`}
			/>
		</div>
	);
};

export default Navigation;
