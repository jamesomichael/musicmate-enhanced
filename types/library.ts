import type { LikedSongsPlaylist, SpotifyPlaylist } from './playlists';

export type LibraryTabType = 'playlists' | 'albums' | 'tracks' | null;

interface LibraryTab {
	type: LibraryTabType;
	label: string;
}

interface LibraryPanel {
	activeTab: LibraryTabType;
	tabs: LibraryTab[];
}

interface Pagination {
	href: string;
	limit: number;
	offset: number;
	next: string | null;
	previous: string | null;
	total: number;
}

interface PlaylistsState {
	isLoading: boolean;
	pagination: Pagination | null;
	items: (LikedSongsPlaylist | SpotifyPlaylist)[];
}

export interface LibraryState {
	panel: LibraryPanel;
	playlists: PlaylistsState;
}
