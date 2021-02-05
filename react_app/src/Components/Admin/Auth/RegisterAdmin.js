import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const RegisterAdmin = () => {

	const [adminNameRegister, setAdminNameRegister] = useState('');
	const [adminPasswordRegister, setAdminPasswordRegister] = useState('');

	const adminRegister = () => {
		axios.post('http://localhost:3001/admin/auth/admin_register', {
			adminNameRegister: adminNameRegister,
			adminPasswordRegister: adminPasswordRegister
		}).then((response) => {
			console.log(response);
		});
	};

	return (
		<div className="login_page">
			<div className="login_input_form">
				<h1>Register Admin</h1>
				<br />
				<label>Login</label>
				<br />
				<input type="text" onChange={(e) => setAdminNameRegister(e.target.value)} />
				<br />
				<label>Password</label>
				<br />
				<input type="text" onChange={(e) => setAdminPasswordRegister(e.target.value)} />
				<br />
				<button onClick={adminRegister} className="submit_button">Register</button>
				<br />
				<br />

				<Link to="/admin/login">
					Login
				</Link>

			</div>
		</div>
	);
};

export default RegisterAdmin;