import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Loader from '../Loader';

const InfiniteScrollContainer = ({
	id,
	dataLength,
	hasMore,
	next,
	children,
}: {
	id: string;
	dataLength: number;
	hasMore: boolean;
	next: () => void;
	children: React.ReactNode;
}) => {
	return (
		<div className="h-full overflow-auto" id={id}>
			<InfiniteScroll
				dataLength={dataLength}
				next={next}
				hasMore={hasMore}
				loader={
					<div className="py-6">
						<Loader />
					</div>
				}
				scrollableTarget={id}
				style={{ overflow: 'visible' }}
			>
				{children}
			</InfiniteScroll>
		</div>
	);
};

export default InfiniteScrollContainer;
