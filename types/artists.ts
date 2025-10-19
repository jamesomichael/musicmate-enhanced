import type {
	SpotifyPaginatedResponse,
	SpotifyAlbum,
	SpotifyArtist,
} from './spotify';
export interface ArtistDiscography {
	albums: SpotifyPaginatedResponse<SpotifyAlbum>;
	singles: SpotifyPaginatedResponse<SpotifyAlbum>;
	compilations: SpotifyPaginatedResponse<SpotifyAlbum>;
}

export type DiscographyTabType = 'albums' | 'singles' | 'compilations';

export interface ArtistsState {
	isLoading: boolean;
	items: SpotifyArtist[];
}
