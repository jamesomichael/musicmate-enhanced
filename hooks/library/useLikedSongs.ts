import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchUserLikedSongs } from '@/redux/slices/librarySlice';

const useLikedSongs = () => {
	const { likedSongs } = useAppSelector((state) => state.library);
	const dispatch = useAppDispatch();

	const fetchPaginatedLikedSongs = useCallback(
		({ offset, limit }: { offset: number; limit: number }) => {
			dispatch(fetchUserLikedSongs({ offset, limit }));
		},
		[]
	);

	return { likedSongs, fetchPaginatedLikedSongs };
};

export default useLikedSongs;
