interface SpotifyExternalUrl {
	spotify: string;
}

export interface SpotifyArtist {
	external_urls: SpotifyExternalUrl;
	href: string;
	id: string;
	name: string;
	type: string;
	uri: string;
}
