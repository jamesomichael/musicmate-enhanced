interface PlaylistImage {
	url: string;
	height?: number | null;
	width?: number | null;
}

export interface LikedSongsPlaylist extends BasePlaylist {
	id: 'library';
	name: 'Liked Songs';
	isPinned: true;
}

interface SpotifyExternalUrl {
	spotify: string;
}

interface PlaylistOwner {
	display_name: string;
	external_urls: SpotifyExternalUrl;
	href: string;
	id: string;
	type: 'user';
	uri: string;
}

interface BasePlaylist {
	id: string;
	name: string;
	images: PlaylistImage[];
	isPinned?: boolean;
	owner?: PlaylistOwner;
}

export interface SpotifyPlaylist extends BasePlaylist {
	collaborative: boolean;
	description: string;
	external_urls: SpotifyExternalUrl;
	href: string;
	primary_color: string | null;
	public: boolean;
	snapshot_id: string;
	// tracks
	type: 'playlist';
	uri: string;
}
