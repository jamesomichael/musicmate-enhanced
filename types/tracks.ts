import type { Pagination } from './library';
import type { SpotifyLibraryLikedSong } from './spotify';

export interface LikedSongsState {
	isLoading: boolean;
	pagination: Pagination | null;
	items: SpotifyLibraryLikedSong[];
}
