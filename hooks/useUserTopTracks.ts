import { useState, useEffect } from 'react';
import axios from 'axios';

import type { SpotifyTrack } from '@/types/spotify';

const useUserTopTracks = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [tracks, setTracks] = useState<SpotifyTrack[] | null>(null);

	useEffect(() => {
		const fetchTopTracks = async () => {
			setIsLoading(true);
			const response = await axios.get('/api/me/top/tracks');
			const { items } = response.data;
			setTracks(items);
			setIsLoading(false);
		};
		fetchTopTracks();
	}, []);

	return { isLoading, tracks };
};

export default useUserTopTracks;
