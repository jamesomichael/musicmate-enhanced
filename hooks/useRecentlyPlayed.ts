import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

import type { SpotifyRecentlyPlayedItem } from '@/types/spotify';

const useRecentlyPlayed = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [tracks, setTracks] = useState<SpotifyRecentlyPlayedItem[] | null>(
		null
	);

	useEffect(() => {
		const fetchRecentlyPlayed = async () => {
			setIsLoading(true);
			const response = await axios.get('/api/me/recently-played');
			const { items } = response.data;
			setTracks(items);
			setIsLoading(false);
		};
		fetchRecentlyPlayed();
	}, []);

	const albums = useMemo(() => {
		if (!tracks) {
			return [];
		}
		return [
			...new Map(
				tracks.map(({ track }) => [track.album.id, track.album])
			).values(),
		];
	}, [tracks]);

	const artists = useMemo(() => {
		if (!tracks) {
			return [];
		}
		return [
			...new Map(
				tracks.map(({ track }) => [
					track.artists[0].id,
					track.artists[0],
				])
			).values(),
		];
	}, [tracks]);

	return { isLoading, tracks, albums, artists };
};

export default useRecentlyPlayed;
