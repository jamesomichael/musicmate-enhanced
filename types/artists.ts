import { SpotifyPaginatedResponse, SpotifyAlbum } from './spotify';

export interface ArtistDiscography {
	albums: SpotifyPaginatedResponse<SpotifyAlbum>;
	singles: SpotifyPaginatedResponse<SpotifyAlbum>;
	compilations: SpotifyPaginatedResponse<SpotifyAlbum>;
}
