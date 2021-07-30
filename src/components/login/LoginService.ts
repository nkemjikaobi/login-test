import axios from 'axios';

const baseAxios = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	headers: {
		'Content-Type': 'application/json',
	},
});

export class LoginService {
	public async LoginUser(userName: string, password: string): Promise<boolean> {
		try {
			const loginResponse = await baseAxios.post('/posts', {
				title: userName,
				body: password,
				userId: 1,
			});
			console.log(loginResponse);
			if (loginResponse.status === 201) {
				console.log('Successful login');
				return true;
			} else {
				console.log('Un-successful login');
				return false;
			}
		} catch (error) {
			console.error(error);
			return false;
		}
	}
}
