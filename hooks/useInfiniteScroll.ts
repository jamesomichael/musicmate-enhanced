import { useCallback } from 'react';

import { useAppDispatch } from '@/redux/hooks';

import type { AsyncThunk } from '@reduxjs/toolkit';
import type { Pagination } from '@/types/library';
import type { SpotifyPaginatedResponse } from '@/types/spotify';

const useInfiniteScroll = (
	paginationData: Pagination | null,
	fetchThunk: AsyncThunk<
		SpotifyPaginatedResponse,
		{ offset?: number; limit?: number },
		object
	>
): { hasMore: boolean; loadMore: () => void } => {
	const dispatch = useAppDispatch();

	const hasMore = !!paginationData?.next;

	const loadMore = useCallback(() => {
		if (!paginationData || !hasMore) {
			return;
		}
		const { offset, limit } = paginationData;
		const newOffset = offset + limit;
		dispatch(fetchThunk({ offset: newOffset, limit }));
	}, [paginationData, hasMore, dispatch, fetchThunk]);

	return { hasMore, loadMore };
};

export default useInfiniteScroll;
