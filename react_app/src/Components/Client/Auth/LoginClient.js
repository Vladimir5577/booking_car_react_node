import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

const LoginClient = props => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorAuth, setErrorAuth] = useState('');
	const [user, setUser] = useState({});
	// const [userLoginStatus, setUserLoginStatus] = useState(false);

	const userLogin = () => {
		axios.post('http://localhost:3001/client/auth/client_login', {
			email: email,
			password: password
		}).then(response => {
			console.log(response.data);
			props.setUserLoginStatus(response.data.auth);
			localStorage.setItem('token', response.data.token);
			localStorage.setItem('userName', response.data.userName);
			localStorage.setItem('userEmail', response.data.userEmail);
			localStorage.setItem('userRentCar', response.data.userRentCar);
			setUser(response.data.user);

		});
	};

	if (props.userLoginStatus) {
		return <Redirect to="/" />
	}

	return (
	<div className="login_client">
		<div className="input_group">
			<h1>LoginClient Page</h1>
			<br />
			<label>Username</label>
			<br />
			<input type="text" onChange={e => setEmail(e.target.value)} />
			<br />
			<label>Password</label>
			<br />
			<input type="text" onChange={e => setPassword(e.target.value)}/>
			<br />
			<button onClick={userLogin} >Login</button>
			<br />
			<p>Don't have an account</p>
			<Link to="/register">Register</Link>
		</div>
	</div>

	);
};

export default LoginClient;