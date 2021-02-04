import { useState } from 'react';

import LayoutAdmin from './LayoutAdmin';
import LoginAdmin from './Auth/LoginAdmin';

const AdminMain = () => {

	const [adminLoginStatus, setAdminLoginStatus] = useState(false);

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