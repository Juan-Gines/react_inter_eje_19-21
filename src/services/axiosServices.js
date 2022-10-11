import APIRequest from '../utils/config/axios.config';

export default function getRandomJoke() {
	return APIRequest.get('/');
}
