'use client';
import React from 'react';

import Loader from '@/components/shared/Loader';
import CategoryItem from './CategoryItem';

import useCategories from '@/hooks/useCategories';

const CategoriesGrid = () => {
	const { isLoading, categories } = useCategories();

	return isLoading ? (
		<Loader />
	) : (
		<div className="overflow-y-scroll cursor-not-allowed px-8 pb-8">
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-4">
				{categories.map(({ id, icons, name }) => {
					return (
						<CategoryItem
							key={id}
							imageUrl={icons[0].url}
							name={name}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default CategoriesGrid;
