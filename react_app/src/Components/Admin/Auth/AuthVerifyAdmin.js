import { useState, useEffect } from 'react';
import axios from 'axios';

const AuthVerifyAdmin = () => {

		const [loginStatus, setLoginStatus] = useState(false);


		const checkLogin = () => {
			axios.get('http://localhost:3001/admin/auth/verify_token', {
				headers: {
					'x-access-token': localStorage.getItem('token')
				}
			}).then((response) => {
				console.log(response.data.auth, 'auth from Promise');
				// setLoginStatus(response.data.auth);
				return response.data.auth;

			});
		
		};

		checkLogin();

};

export default AuthVerifyAdmin;