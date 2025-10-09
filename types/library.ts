export type LibraryTabType = 'playlists' | 'albums' | 'tracks' | null;

interface LibraryTab {
	type: LibraryTabType;
	label: string;
}

interface LibraryPanel {
	activeTab: LibraryTabType;
	tabs: LibraryTab[];
}

export interface LibraryState {
	panel: LibraryPanel;
}
