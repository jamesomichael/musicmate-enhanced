import type { Pagination } from './library';
import type { SpotifyLibraryAlbum } from './spotify';

export interface AlbumsState {
	isLoading: boolean;
	pagination: Pagination | null;
	items: SpotifyLibraryAlbum[];
}
