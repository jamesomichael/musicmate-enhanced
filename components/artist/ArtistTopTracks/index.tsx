'use client';
import React from 'react';

import { FaFire } from 'react-icons/fa6';

import ExpandableTracklist from '@/components/tracklist/ExpandableTracklist';

import type { SpotifyTrack } from '@/types/spotify';

const ArtistTopTracks = ({ tracks }: { tracks: SpotifyTrack[] }) => {
	return (
		<div className="flex flex-col">
			<div className="flex items-center gap-2 text-white pb-4">
				<FaFire className="w-6 h-6" />
				<span className="font-funnel text-2xl font-bold">Popular</span>
			</div>
			<ExpandableTracklist
				tracks={tracks}
				maxItems={10}
				showArtists={false}
			/>
		</div>
	);
};

export default ArtistTopTracks;
