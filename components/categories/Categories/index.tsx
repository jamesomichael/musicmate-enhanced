'use client';
import React from 'react';

import Loader from '@/components/shared/Loader';

import useCategories from '@/hooks/useCategories';

const Categories = () => {
	const { isLoading, categories } = useCategories();

	return isLoading ? (
		<Loader />
	) : (
		<div className="overflow-y-scroll cursor-not-allowed px-8 pb-8">
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-4">
				{categories.map(({ id, icons, name }) => {
					return (
						<div
							key={id}
							className="relative bg-center bg-cover w-full aspect-square flex justify-start items-end p-2 rounded-md shadow-md"
							style={{
								backgroundImage: `url(${icons[0].url})`,
							}}
						>
							<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-65"></div>
							<span className="leading-5 relative font-funnel text-sm xl:text-lg text-white truncate">
								{name}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Categories;
