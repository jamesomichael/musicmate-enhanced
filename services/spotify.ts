import axios from 'axios';

export const fetchCurrentUser = async (accessToken: string) => {
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

export const fetchCategories = async (
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

export const fetchPlaybackState = async (accessToken: string) => {
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

export const fetchUserPlaylists = async (
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

export const fetchUserAlbums = async (
	{ limit = 50, offset = 0 }: { limit?: number; offset?: number },
	accessToken: string
) => {
	console.log("[fetchUserAlbums] Fetching the user's albums...");
	try {
		const response = await axios.get(
			`https://api.spotify.com/v1/me/albums?limit=${limit}&offset=${offset}`,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		console.log('[fetchUserAlbums] Albums retrieved.');
		return response.data;
	} catch (error) {
		if (error instanceof Error) {
			console.error(
				'[fetchUserAlbums] Unable to fetch albums:',
				error.message
			);
		}
		throw error;
	}
};

export const fetchLikedSongs = async (
	{ limit = 50, offset = 0 }: { limit?: number; offset?: number },
	accessToken: string
) => {
	console.log("[fetchLikedSongs] Fetching the user's liked songs...");
	try {
		const response = await axios.get(
			`https://api.spotify.com/v1/me/tracks?limit=${limit}&offset=${offset}`,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		console.log('[fetchLikedSongs] Liked songs retrieved.');
		return response.data;
	} catch (error) {
		if (error instanceof Error) {
			console.error(
				'[fetchLikedSongs] Unable to fetch liked songs:',
				error.message
			);
		}
		throw error;
	}
};

export const fetchPlaylistById = async (
	playlistId: string,
	accessToken: string
) => {
	console.log('[fetchPlaylistById] Fetching playlist...');
	try {
		const response = await axios.get(
			`https://api.spotify.com/v1/playlists/${playlistId}`,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		console.log('[fetchPlaylistById] Playlist retrieved.');
		return response.data;
	} catch (error) {
		if (error instanceof Error) {
			console.error(
				'[fetchPlaylistById] Unable to fetch playlist:',
				error.message
			);
		}
		throw error;
	}
};

export const fetchPlaylistItems = async (
	playlistId: string,
	{ limit = 50, offset = 0 }: { limit?: number; offset?: number },
	accessToken: string
) => {
	console.log('[fetchPlaylistItems] Fetching playlist items...');
	try {
		const response = await axios.get(
			`https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=${limit}&offset=${offset}`,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		console.log('[fetchPlaylistItems] Playlist items retrieved.');
		return response.data;
	} catch (error) {
		if (error instanceof Error) {
			console.error(
				'[fetchPlaylistItems] Unable to fetch playlist items:',
				error.message
			);
		}
		throw Error;
	}
};

export const fetchAlbumById = async (id: string, accessToken: string) => {
	console.log('[fetchAlbumById] Fetching album...');
	try {
		const response = await axios.get(
			`https://api.spotify.com/v1/albums/${id}`,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		console.log('[fetchAlbumById] Album retrieved.');
		return response.data;
	} catch (error) {
		if (error instanceof Error) {
			console.error(
				'[fetchAlbumById] Unable to fetch album:',
				error.message
			);
		}
		throw Error;
	}
};

export const play = async (
	deviceId: string,
	{
		contextUri,
		offset,
		uris,
	}: { contextUri: string; offset?: number; uris: string[] },
	accessToken: string
) => {
	console.log('[play] Playing item...');
	try {
		await axios.put(
			`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
			{
				...(contextUri && { context_uri: contextUri }),
				...(offset && { offset }),
				...(uris && { uris }),
			},
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);

		console.log('[play] Item is now playing.');
		return true;
	} catch (error) {
		if (error instanceof Error) {
			console.error('[play] Error playing:', error);
		}
		throw Error;
	}
};
