import type { AlbumsState } from './albums';
import type { PlaylistsState } from './playlists';

export type LibraryTabType = 'playlists' | 'albums' | 'tracks' | null;

interface LibraryTab {
	type: LibraryTabType;
	label: string;
}

interface LibraryPanel {
	activeTab: LibraryTabType;
	tabs: LibraryTab[];
}

export interface Pagination {
	href: string;
	limit: number;
	offset: number;
	next: string | null;
	previous: string | null;
	total: number;
}

export interface LibraryState {
	panel: LibraryPanel;
	playlists: PlaylistsState;
	albums: AlbumsState;
}
