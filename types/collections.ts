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

export type CollectionTracklistProps =
	| {
			type: 'playlist';
			tracks: SpotifyPlaylistItem[] | SpotifyLibraryLikedSong[];
			album?: never;
			contextUri: string;
	  }
	| {
			type: 'results';
			tracks: SpotifyTrack[];
			album?: never;
			contextUri?: never;
	  }
	| {
			type: SpotifyAlbumType;
			tracks: SpotifyTrack[];
			album: SpotifyAlbum;
			contextUri: string;
	  };
