import axios from 'axios';

const fetchCurrentUser = async (accessToken: string) => {
	console.log('[fetchCurrentUser] Fetching user...');
	try {
		const response = await axios.get('https://api.spotify.com/v1/me', {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		console.log('[fetchCurrentUser] User retrieved.');
		return response.data;
	} catch (error) {
		if (error instanceof Error) {
			console.error(
				'[fetchCurrentUser] Unable to fetch user:',
				error.message
			);
		}
		throw error;
	}
};

const fetchCategories = async (
	{ limit = 50, offset = 0 },
	accessToken: string
) => {
	console.log('[fetchCategories] Fetching categories...');
	try {
		const response = await axios.get(
			`https://api.spotify.com/v1/browse/categories?locale=en_GB&limit=${limit}&offset=${offset}`,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		console.log('[fetchCategories] Categories retrieved.');
		return response.data;
	} catch (error) {
		if (error instanceof Error) {
			console.error(
				'[fetchCategories] Unable to fetch categories:',
				error.message
			);
		}
		throw error;
	}
};

const fetchPlaybackState = async (accessToken: string) => {
	console.log('[fetchPlaybackState] Fetching playback state...');
	try {
		const response = await axios.get(
			'https://api.spotify.com/v1/me/player',
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);

		console.log('[fetchPlaybackState] Playback state retrieved.');
		return response.data;
	} catch (error) {
		if (error instanceof Error) {
			console.error(
				'[fetchPlaybackState] Error fetching playback state:',
				error
			);
		}
		throw error;
	}
};

const fetchUserPlaylists = async (
	{ limit = 50, offset = 0 }: { limit?: number; offset?: number },
	accessToken: string
) => {
	console.log("[fetchUserPlaylists] Fetching the user's playlists...");
	try {
		const response = await axios.get(
			`https://api.spotify.com/v1/me/playlists?limit=${limit}&offset=${offset}`,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		console.log('[fetchUserPlaylists] Playlists retrieved.');
		return response.data;
	} catch (error) {
		if (error instanceof Error) {
			console.error(
				'[fetchUserPlaylists] Unable to fetch playlists:',
				error.message
			);
		}
		throw error;
	}
};

export default {
	fetchCurrentUser,
	fetchCategories,
	fetchPlaybackState,
	fetchUserPlaylists,
};
