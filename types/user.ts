import type {
	SpotifyExplicitContent,
	SpotifyExternalUrl,
	SpotifyFollowers,
	SpotifyImage,
} from './spotify';

export interface UserState {
	displayName: string | null;
	country: string | null;
	email: string | null;
	explicitContent: SpotifyExplicitContent | null;
	externalUrls: SpotifyExternalUrl | null;
	followers: SpotifyFollowers | null;
	href: string | null;
	id: string | null;
	images: SpotifyImage[] | null;
	product: string | null;
	type: string | null;
	uri: string | null;
}
