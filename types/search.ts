import type {
	SpotifyArtist,
	SpotifyPaginatedResponse,
	SpotifyPlaylist,
	SpotifyAlbum,
	SpotifyTrack,
} from './spotify';

export type SearchTabType =
	| 'results'
	| 'playlists'
	| 'artists'
	| 'albums'
	| 'tracks';

export interface SearchResultsData {
	playlists: SpotifyPaginatedResponse<SpotifyPlaylist>;
	artists: SpotifyPaginatedResponse<SpotifyArtist>;
	albums: SpotifyPaginatedResponse<SpotifyAlbum>;
	tracks: SpotifyPaginatedResponse<SpotifyTrack>;
}
