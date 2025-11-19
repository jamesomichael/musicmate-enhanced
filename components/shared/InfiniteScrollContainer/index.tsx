import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import Loader from '../Loader';

const InfiniteScrollContainer = ({
	hasMore,
	next,
	children,
}: {
	hasMore: boolean;
	next: () => void;
	children: React.ReactNode;
}) => {
	return (
		<div className="h-full overflow-auto">
			<InfiniteScroll
				loadMore={next}
				hasMore={hasMore}
				useWindow={false}
				loader={
					<div className="py-6 mb-8" key={0}>
						<Loader />
					</div>
				}
			>
				{children}
			</InfiniteScroll>
		</div>
	);
};

export default InfiniteScrollContainer;
