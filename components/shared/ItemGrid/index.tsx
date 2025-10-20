import React, { Fragment } from 'react';

const ItemGrid = <T,>({
	items,
	renderItem,
}: {
	items: T[];
	renderItem: (item: T, idx: number) => React.ReactNode;
}) => {
	return (
		<div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
			{items.map((item, idx) => (
				<Fragment key={idx}>{renderItem(item, idx)}</Fragment>
			))}
		</div>
	);
};

export default ItemGrid;
