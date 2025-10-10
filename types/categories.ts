import type { SpotifyCategory } from './spotify';

export interface CategoriesState {
	isLoading: boolean;
	hasFetched: boolean;
	categories: SpotifyCategory[];
}
