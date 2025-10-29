import Loader from '@/components/shared/Loader';
import SuggestionsGrid from '@/components/suggestions/SuggestionsGrid';

export default function Home() {
	return (
		<div className="h-full">
			<SuggestionsGrid />
			<Loader />
		</div>
	);
}
