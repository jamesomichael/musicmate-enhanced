import { useState, useEffect } from 'react';
import axios from 'axios';

import type { SpotifyArtist } from '@/types/spotify';

const useUserTopArtists = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [artists, setArtists] = useState<SpotifyArtist[] | null>(null);
	const [period, setPeriod] = useState('short_term');

	useEffect(() => {
		const fetchTopArtists = async () => {
			setIsLoading(true);
			const response = await axios.get(
				`/api/me/top/artists?period=${period}`
			);
			const { items } = response.data;
			setArtists(items);
			setIsLoading(false);
		};
		fetchTopArtists();
	}, [period]);

	return { isLoading, artists, period, setPeriod };
};

export default useUserTopArtists;
