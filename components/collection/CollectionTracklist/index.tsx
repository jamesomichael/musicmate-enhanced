import React from 'react';

import { FaRegClock } from 'react-icons/fa6';

import CollectionTracklistItem from './CollectionTracklistItem';

import type {
	SpotifyAlbumType,
	SpotifyLibraryLikedSong,
	SpotifyPlaylistItem,
	SpotifyTrack,
} from '@/types/spotify';
import type { Pagination } from '@/types/library';

type Props =
	| {
			type: 'playlist';
			tracks: SpotifyPlaylistItem[] | SpotifyLibraryLikedSong[];
			paginationData: Pagination;
			contextUri: string;
	  }
	| {
			type: SpotifyAlbumType;
			tracks: SpotifyTrack[];
			paginationData: Pagination;
			contextUri: string;
	  };

const CollectionTracklist = ({
	type,
	contextUri,
	paginationData,
	tracks,
}: Props) => {
	const gridConfig =
		type === 'playlist'
			? 'grid grid-cols-[1.75rem_1.5fr_1fr_1fr_5rem] gap-5'
			: 'grid grid-cols-[1.75rem_1.5fr_5rem] gap-5';
	return (
		<div className="text-white p-8 divide-y divide-neutral-700 rounded-full">
			<div
				className={`${gridConfig} items-end px-4 pb-3 font-funnel text-neutral-400 text-sm`}
			>
				<span className="text-right mr-1">#</span>
				<span>Title</span>
				{type === 'playlist' && (
					<>
						<span>Album</span>
						<span>Date added</span>
					</>
				)}
				<div className="flex justify-end items-center mr-2">
					<FaRegClock className="w-4 h-4" />
				</div>
			</div>

			<div className="mt-4 flex flex-col">
				{type === 'playlist'
					? tracks.map(({ track, added_at }, idx) => (
							<CollectionTracklistItem
								key={`${idx}_${track.id}_${added_at}`}
								addedAt={added_at}
								gridConfig={gridConfig}
								number={idx + 1}
								track={track}
								type={type}
								uri={track.uri}
								contextUri={contextUri}
							/>
					  ))
					: tracks.map((track) => (
							<CollectionTracklistItem
								key={track.id}
								gridConfig={gridConfig}
								number={track.track_number}
								track={track}
								type={type}
								uri={track.uri}
								contextUri={contextUri}
							/>
					  ))}
			</div>
		</div>
	);
};

export default CollectionTracklist;
