import { cookies } from 'next/headers';

import SuggestionsGrid from '@/components/suggestions/SuggestionsGrid';
import UserTopTracks from '@/components/user/UserTopTracks';
import UserTopArtists from '@/components/user/UserTopArtists';
import RecentlyPlayed from '@/components/user/RecentlyPlayed';

import {
	fetchUserRecentlyPlayed,
	fetchUserTopArtists,
	fetchUserTopTracks,
} from '@/services/spotify';

const Home = async () => {
	const cookieStore = await cookies();
	const accessToken = cookieStore.get('access_token')!.value;

	const { items: topTracks } = await fetchUserTopTracks({}, accessToken);
	const { items: topArtists } = await fetchUserTopArtists({}, accessToken);
	const { items: recentlyPlayedTracks } = await fetchUserRecentlyPlayed(
		accessToken
	);

	return (
		<div className="h-full flex flex-col gap-4">
			<SuggestionsGrid />
			<div className="flex flex-col gap-4 px-6 pb-6">
				{recentlyPlayedTracks?.length > 0 && (
					<RecentlyPlayed tracks={recentlyPlayedTracks} />
				)}
				{topArtists?.length > 0 && (
					<UserTopArtists artists={topArtists} />
				)}
				{topTracks?.length > 0 && <UserTopTracks tracks={topTracks} />}
			</div>
		</div>
	);
};

export default Home;
