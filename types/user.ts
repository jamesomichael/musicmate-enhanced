import type {
	SpotifyExplicitContent,
	SpotifyExternalUrl,
	SpotifyFollowers,
	SpotifyImage,
	SpotifyProduct,
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
	product: SpotifyProduct | null;
	type: string | null;
	uri: string | null;
}
