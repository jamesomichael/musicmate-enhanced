import React, { useMemo } from 'react';

import { FaRegClock } from 'react-icons/fa6';

import TracklistItem from '@/components/tracklist/TracklistItem';
import AlbumMetadata from '@/components/album/AlbumMetadata';

import type {
	SpotifyAlbum,
	SpotifyAlbumType,
	SpotifyLibraryLikedSong,
	SpotifyPlaylistItem,
	SpotifyTrack,
} from '@/types/spotify';
import type { Pagination } from '@/types/library';

interface BaseProps {
	paginationData: Pagination;
}

type Props =
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

const CollectionTracklist = ({
	type,
	contextUri,
	paginationData,
	album,
	tracks,
}: Props) => {
	const gridConfig = useMemo(
		() =>
			type === 'results'
				? 'grid grid-cols-[1.75rem_1.5fr_1fr_5rem] gap-5'
				: type === 'playlist'
				? 'grid grid-cols-[1.75rem_1.5fr_1fr_1fr_5rem] gap-5'
				: 'grid grid-cols-[1.75rem_1.5fr_5rem] gap-5',
		[type]
	);

	return (
		<div>
			<div className="text-white p-8 divide-y divide-neutral-700 rounded-full">
				<div
					className={`${gridConfig} items-end px-4 pb-3 font-funnel text-neutral-400 text-sm`}
				>
					<span className="text-right mr-1">#</span>
					<span>Title</span>
					{(type === 'playlist' || type === 'results') && (
						<span>Album</span>
					)}
					{type === 'playlist' && <span>Date added</span>}
					<div className="flex justify-end items-center mr-2">
						<FaRegClock className="w-4 h-4" />
					</div>
				</div>

				<div className="mt-4 flex flex-col">
					{type === 'results'
						? tracks.map((track, idx) => (
								<TracklistItem
									key={`${idx}_${track.id}`}
									number={idx + 1}
									id={track.id}
									name={track.name}
									artists={track.artists}
									duration={track.duration_ms}
									isExplicit={track.explicit}
									contextUri={track.album.uri}
									uri={track.uri}
									showAlbumArt={true}
									album={track.album}
									gridConfig={gridConfig}
								/>
						  ))
						: type === 'playlist'
						? tracks.map(({ track, added_at }, idx) => (
								<TracklistItem
									key={`${idx}_${track.id}_${added_at}`}
									number={idx + 1}
									id={track.id}
									name={track.name}
									artists={track.artists}
									duration={track.duration_ms}
									isExplicit={track.explicit}
									contextUri={contextUri}
									position={idx}
									showAlbumArt={true}
									album={track.album}
									addedAt={added_at}
									gridConfig={gridConfig}
								/>
						  ))
						: tracks.map((track, idx) => (
								<TracklistItem
									key={`${idx}_${track.id}`}
									id={track.id}
									number={track.track_number}
									name={track.name}
									artists={track.artists}
									duration={track.duration_ms}
									isExplicit={track.explicit}
									contextUri={contextUri}
									uri={track.uri}
									showAlbumArt={false}
									gridConfig={gridConfig}
								/>
						  ))}
				</div>
			</div>
			{type !== 'playlist' && type !== 'results' && (
				<AlbumMetadata
					releaseDate={album?.release_date}
					releaseDatePrecision={album?.release_date_precision}
					copyrightNotices={album?.copyrights}
				/>
			)}
		</div>
	);
};

export default CollectionTracklist;
