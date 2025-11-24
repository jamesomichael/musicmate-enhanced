import type {
	SpotifyPlaylistItem,
	SpotifyLibraryLikedSong,
	SpotifyTrack,
	SpotifyAlbumType,
	SpotifyCopyright,
	SpotifyReleaseDatePrecision,
} from './spotify';

export interface Creator {
	name: string;
	id: string;
}

export type CollectionTracklistProps =
	| {
			type: 'playlist';
			tracks: SpotifyPlaylistItem[] | SpotifyLibraryLikedSong[];
			releaseDate?: never;
			releaseDatePrecision?: never;
			copyrightNotices?: never;
			contextUri: string;
	  }
	| {
			type: 'results';
			tracks: SpotifyTrack[];
			releaseDate?: never;
			releaseDatePrecision?: never;
			copyrightNotices?: never;
			contextUri?: never;
	  }
	| {
			type: SpotifyAlbumType;
			tracks: SpotifyTrack[];
			releaseDate: string;
			releaseDatePrecision?: SpotifyReleaseDatePrecision;
			copyrightNotices?: SpotifyCopyright[];
			contextUri: string;
	  };
