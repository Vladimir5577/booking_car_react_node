import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

const LoginClient = props => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [errorAuth, setErrorAuth] = useState('');
	const [user, setUser] = useState({});
	// const [userLoginStatus, setUserLoginStatus] = useState(false);

	const userLogin = () => {

		setErrorAuth('');

		if (!email) {
			setEmailError('Email required');
		} else {
			setEmailError('');
		}

		if (!password) {
			setPasswordError('Password required');
		} else {
			setPasswordError('');
		}
		if (!email || !password ) return;

		axios.post('http://localhost:3001/client/auth/client_login', {
			email: email,
			password: password
		}).then(response => {
			console.log(response.data);
			console.log(response.data.errorMessage);
			setErrorAuth(response.data.errorMessage);
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
			{ errorAuth && <h2 style={{color: 'red'}}>{ errorAuth }</h2> }
			<br />
			<label>Username</label>
			<br />
			<input type="text" onChange={e => setEmail(e.target.value)} />
			<br />
			{ emailError && <h4 style={{color: 'red'}}>{emailError}</h4> }
			<br />
			<label>Password</label>
			<br />
			<input type="text" onChange={e => setPassword(e.target.value)}/>
			<br />
			{ passwordError && <h4 style={{color: 'red'}}>{passwordError}</h4> }
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