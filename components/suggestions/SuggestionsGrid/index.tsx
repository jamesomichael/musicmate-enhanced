'use client';
import React from 'react';

import SuggestionItem from './SuggestionItem';
import Loader from '@/components/shared/Loader';

import { useAppSelector } from '@/redux/hooks';

const SuggestionsGrid = () => {
	const { albums } = useAppSelector((state) => state.library);

	return albums.isLoading ? (
		<div className="h-44">
			<Loader />
		</div>
	) : (
		<div className="p-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 bg-gradient-to-b from-neutral-700/60 to-spotify-black">
			{albums.items.slice(0, 8).map(({ album }) => (
				<SuggestionItem
					key={album.id}
					id={album.id}
					imageUrl={album.images?.[0]?.url}
					name={album.name}
				/>
			))}
		</div>
	);
};

export default SuggestionsGrid;
