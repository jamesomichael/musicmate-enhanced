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

export default {
	fetchCurrentUser,
};
