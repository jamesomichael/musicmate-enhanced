import { useCallback } from 'react';

import type { Pagination } from '@/types/library';

const useInfiniteScroll = (
	paginationData: Pagination | null,
	loadMoreFn: ({ offset, limit }: { offset: number; limit: number }) => void
): { hasMore: boolean; loadMore: () => void } => {
	const hasMore = !!paginationData?.next;

	const loadMore = useCallback(() => {
		if (!paginationData || !hasMore) {
			return;
		}
		const { offset, limit } = paginationData;
		const newOffset = offset + limit;
		loadMoreFn({ offset: newOffset, limit });
	}, [paginationData, hasMore, loadMoreFn]);

	return { hasMore, loadMore };
};

export default useInfiniteScroll;
