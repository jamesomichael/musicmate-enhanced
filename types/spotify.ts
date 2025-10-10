export interface SpotifyExternalUrl {
	spotify: string;
}

export interface SpotifyImage {
	url: string;
	height: number | null;
	width: number | null;
}

interface SpotifyCopyright {
	text: string;
	type: string;
}

interface SpotifyItemOwner {
	display_name: string;
	external_urls: SpotifyExternalUrl;
	href: string;
	id: string;
	type: 'user';
	uri: string;
}

export interface SpotifyExplicitContent {
	filter_enabled: boolean;
	filter_locked: boolean;
}

export interface SpotifyFollowers {
	href: string | null;
	total: number;
}

export interface SpotifyPaginatedResponse {
	href: string;
	limit: number;
	next: string | null;
	offset: number;
	previous: string | null;
	total: number;
	items:
		| SpotifyTrack[]
		| SpotifyAlbum[]
		| SpotifyArtist[]
		| SpotifyCategory[];
}

export interface SpotifyCategory {
	href: string;
	id: string;
	icons: SpotifyImage[];
	name: string;
}

export interface SpotifyAlbum {
	album_type: 'album' | 'single' | 'compilation';
	total_tracks: number;
	external_urls: SpotifyExternalUrl;
	available_markets: string[];
	href: string;
	id: string;
	images: SpotifyImage[];
	name: string;
	release_date: string;
	release_date_precision: string;
	type: 'album';
	uri: string;
	artists: SpotifyArtist[];
	tracks: SpotifyPaginatedResponse[];
	copyrights: SpotifyCopyright[];
	label: string;
	popularity: number;
}

export interface SpotifyLibraryAlbum {
	added_at: string;
	album: SpotifyAlbum;
}

export interface SpotifyArtist {
	external_urls: SpotifyExternalUrl;
	followers: SpotifyFollowers;
	genres: string[];
	href: string;
	id: string;
	images: SpotifyImage[];
	name: string;
	popularity: number;
	type: 'artist';
	uri: string;
}

export interface SpotifyPlaylist {
	collaborative: boolean;
	description: string;
	external_urls: SpotifyExternalUrl;
	href: string;
	id: string;
	images: SpotifyImage[];
	name: string;
	owner: SpotifyItemOwner;
	primary_color: string | null;
	public: boolean;
	snapshot_id: string;
	tracks: SpotifyPaginatedResponse[];
	type: 'playlist';
	uri: string;
}

export interface SpotifyTrack {
	artists: SpotifyArtist[];
	album: SpotifyAlbum;
	available_markets: string[];
	disc_number: number;
	duration_ms: number;
	explicit: boolean;
	external_urls: SpotifyExternalUrl;
	href: string;
	id: string;
	is_playable: boolean;
	name: string;
	track_number: number;
	type: 'track';
	uri: string;
	is_local: boolean;
}

export interface SpotifyLibraryLikedSong {
	added_at: string;
	track: SpotifyTrack;
}

export interface SpotifyUser {
	country?: string;
	display_name?: string;
	email?: string;
	explicit_content: SpotifyExplicitContent;
	external_urls: SpotifyExternalUrl;
	followers: SpotifyFollowers;
	href: string;
	id: string;
	images: SpotifyImage[];
	product: string;
	type: 'user';
	uri: string;
}
