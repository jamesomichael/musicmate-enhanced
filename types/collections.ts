import type { Pagination } from './library';
import type {
	SpotifyPlaylistItem,
	SpotifyLibraryLikedSong,
	SpotifyTrack,
	SpotifyAlbumType,
	SpotifyAlbum,
} from './spotify';

export interface Creator {
	name: string;
	id: string;
}

interface BaseProps {
	paginationData: Pagination;
}

export type CollectionTracklistProps =
	| (BaseProps & {
			type: 'playlist';
			tracks: SpotifyPlaylistItem[] | SpotifyLibraryLikedSong[];
			album?: never;
			contextUri: string;
	  })
	| (BaseProps & {
			type: 'results';
			tracks: SpotifyTrack[];
			album?: never;
			contextUri?: never;
	  })
	| (BaseProps & {
			type: SpotifyAlbumType;
			tracks: SpotifyTrack[];
			album: SpotifyAlbum;
			contextUri: string;
	  });
