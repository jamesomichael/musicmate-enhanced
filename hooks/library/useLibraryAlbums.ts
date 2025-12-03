import { useCallback } from 'react';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { fetchUserAlbums } from '@/redux/slices/librarySlice';

const useLibraryAlbums = () => {
	const { albums } = useAppSelector((state) => state.library);
	const dispatch = useAppDispatch();

	const fetchPaginatedAlbums = useCallback(
		({ offset, limit }: { offset: number; limit: number }) => {
			dispatch(fetchUserAlbums({ offset, limit }));
		},
		[]
	);

	return { albums, fetchPaginatedAlbums };
};

export default useLibraryAlbums;
