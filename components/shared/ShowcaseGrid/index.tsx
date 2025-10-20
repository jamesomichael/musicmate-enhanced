import React, { Fragment } from 'react';

const ShowcaseGrid = <T,>({
	title,
	maxItems,
	items,
	renderItem,
}: {
	title?: string;
	maxItems?: number;
	items: T[];
	renderItem: (item: T, idx: number) => React.ReactNode;
}) => {
	return (
		<div className="flex flex-col gap-2">
			{title && (
				<div className="flex items-center">
					<div className="flex items-center gap-2 text-white">
						<span className="font-funnel text-2xl font-bold">
							{title}
						</span>
					</div>
				</div>
			)}
			<div className="-mx-3 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7">
				{(maxItems ? items.slice(0, maxItems) : items).map(
					(item, idx) => (
						<Fragment key={idx}>{renderItem(item, idx)}</Fragment>
					)
				)}
			</div>
		</div>
	);
};

export default ShowcaseGrid;
