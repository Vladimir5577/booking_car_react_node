import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

const LoginAdmin = () => {

	const [adminNameLogin, setAdminNameLogin] = useState('');
	const [adminPasswordLogin, setAdminPasswordLogin] = useState('');
	const [adminLoginStatus, setAdminLoginStatus] = useState(false);
	const [errorAuth, setErrorAuth] = useState('');

	const adminLogin = () => {
		axios.post('http://localhost:3001/admin/auth/admin_login', {
			adminNameLogin: adminNameLogin,
			adminPasswordLogin: adminPasswordLogin
		}).then((response) => {
			setErrorAuth(response.data.message);
			if (response.data.auth) {
				setAdminLoginStatus(true);
				localStorage.setItem('token', response.data.token);
			}
			console.log(response.data);
		});
	};

	// redirect to admin panel if logged in
	if (adminLoginStatus) {
		return <Redirect to="/admin" />;
	}

	return (
		<div className="login_page">
			<div className="login_input_form">
				<h1>Admin Login</h1>
				{ errorAuth && <h3 className="error_message">{ errorAuth }</h3> }
				<br />
				<label>Login</label>
				<br />
				<input type="text" onChange={e => setAdminNameLogin(e.target.value)} />
				<br />
				<label>Password</label>
				<br />
				<input type="text" onChange={e => setAdminPasswordLogin(e.target.value)} />
				<br />
				<button onClick={adminLogin} className="submit_button">Login</button>
				<br />
				<br />

				<Link to="/admin/register">
					Register
				</Link>
			
			</div>
		</div>
	);
};

export default LoginAdmin;