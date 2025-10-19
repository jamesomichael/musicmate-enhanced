import React from 'react';

const CategoryItem = ({
	imageUrl,
	name,
}: {
	imageUrl: string;
	name: string;
}) => {
	return (
		<div
			className="relative bg-center bg-cover w-full aspect-square flex justify-start items-end p-2 rounded-md shadow-md"
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
		>
			<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-65"></div>
			<span className="leading-5 relative font-funnel text-sm xl:text-lg text-white truncate">
				{name}
			</span>
		</div>
	);
};

export default CategoryItem;
