import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const RegisterClient = () => {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorAuth, setErrorAuth] = useState('');

	const userRegister = () => {
		axios.post('http://localhost:3001/client/auth/client_register', {
			name: name,
			email: email,
			password: password
		}).then(response => {
			console.log(response.data);
		});
	};

	return (
	<div className="login_client">
		<div className="input_group">
			<h1>Register Page</h1>
			<br />
			<label>Username</label>
			<br />
			<input type="text" onChange={e => setName(e.target.value)} />
			<br />
			<label>Email</label>
			<br />
			<input type="text" onChange={e => setEmail(e.target.value)} />
			<br />
			<label>Password</label>
			<br />
			<input type="text" onChange={e => setPassword(e.target.value)} />
			<br />
			<button onClick={userRegister} >Register</button>
			<br />
			<p>Already have an account</p>
			<Link to="/login">Login</Link>
		</div>
	</div>

	);
};

export default RegisterClient;