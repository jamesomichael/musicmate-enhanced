import SuggestionsGrid from '@/components/suggestions/SuggestionsGrid';
import UserTopTracks from '@/components/user/UserTopTracks';
import UserTopArtists from '@/components/user/UserTopArtists';
import RecentlyPlayed from '@/components/user/RecentlyPlayed';

const Home = () => {
	return (
		<div className="h-full flex flex-col gap-4">
			<div>
				<SuggestionsGrid />
			</div>
			<div className="flex flex-col gap-4 px-6 pb-6">
				<RecentlyPlayed />
				<UserTopArtists />
				<UserTopTracks />
			</div>
		</div>
	);
};

export default Home;
