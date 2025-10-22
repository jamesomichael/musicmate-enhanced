import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import {
	followArtist,
	fetchFollowedArtists,
	unfollowArtist,
} from '@/redux/slices/librarySlice';

const useFollowArtist = (id: string, contextUri: string) => {
	const dispatch = useAppDispatch();

	const { artists: followedArtists } = useAppSelector(
		(state) => state.library
	);

	const isFollowed = followedArtists.items.some(
		(artist) => artist.uri === contextUri
	);

	const follow = async () => {
		await dispatch(followArtist(id));
		dispatch(fetchFollowedArtists({}));
	};

	const unfollow = () => dispatch(unfollowArtist(id));

	return { isFollowed, follow, unfollow };
};

export default useFollowArtist;
