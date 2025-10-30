import axios from 'axios';

export const getAccessToken = async () => {
	const response = await axios.get('/api/token');
	const { token } = response.data;
	return token;
};
