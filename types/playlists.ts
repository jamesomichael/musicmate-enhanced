import type { Pagination } from './library';
import type { SpotifyPlaylist } from './spotify';

interface LikedSongsImage {
	url: string;
}

export interface LikedSongsPlaylist {
	id: 'liked-songs';
	name: 'Liked Songs';
	images: LikedSongsImage[];
	isPinned: true;
}

export interface PlaylistsState {
	isLoading: boolean;
	pagination: Pagination | null;
	items: (LikedSongsPlaylist | SpotifyPlaylist)[];
}
