import { useEffect } from 'react';

import { useAppDispatch } from '@/redux/hooks';
import {
	fetchUserPlaylists,
	fetchUserAlbums,
	fetchUserLikedSongs,
	fetchFollowedArtists,
} from '@/redux/slices/librarySlice';

const useLibrary = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchUserPlaylists({}));
		dispatch(fetchUserAlbums({}));
		dispatch(fetchUserLikedSongs({}));
		dispatch(fetchFollowedArtists({}));
	}, [dispatch]);
};

export default useLibrary;
