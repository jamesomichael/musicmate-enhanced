import { useCallback } from 'react';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { fetchUserPlaylists } from '@/redux/slices/librarySlice';

const useLibraryPlaylists = () => {
	const { playlists } = useAppSelector((state) => state.library);
	const dispatch = useAppDispatch();

	const fetchPaginatedPlaylists = useCallback(
		({ offset, limit }: { offset: number; limit: number }) => {
			dispatch(fetchUserPlaylists({ offset, limit }));
		},
		[]
	);

	return { playlists, fetchPaginatedPlaylists };
};

export default useLibraryPlaylists;
