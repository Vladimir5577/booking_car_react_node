import { useState } from 'react';
import axios from 'axios';

import LayoutAdmin from './LayoutAdmin';
import LoginAdmin from './Auth/LoginAdmin';

const AdminMain = () => {

	const [adminLoginStatus, setAdminLoginStatus] = useState(false);
	const localToken = localStorage.getItem('token');

	if (localStorage.getItem('token')) {
		axios.get('http://localhost:3001/admin/auth/verify_token', {
			headers: {
				'x-access-token': localToken
			}
		}).then((response) => {
			setAdminLoginStatus(response.data.auth);
		});
	}

	return (
		<div>
			{
				 adminLoginStatus 
				? <LayoutAdmin /> 
				: <LoginAdmin />
			}
		</div>
	);
};

export default AdminMain;