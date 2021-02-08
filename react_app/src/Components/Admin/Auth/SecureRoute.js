import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';

function SecureRoute (props) {

	const [loginStatus, setLoginStatus] = useState(false);

	const checkLogin = () => {
		axios.get('http://localhost:3001/admin/auth/verify_token', {
			headers: {
				'x-access-token': localStorage.getItem('token')
			}
		}).then((response) => {
			console.log(response.data.auth, 'auth from Promise');
			setLoginStatus(response.data.auth);
		});
	};

	checkLogin();

console.log(loginStatus, 'bla');

	const authentication = {
		isLoggedIn: loginStatus,
		onAuthentication () {
			this.isLoggedIn = true;
		},
		getLoginStatus () {
			return this.isLoggedIn;
		}
	};

	return (
		<Route path={props.path} 
				render={data => authentication.getLoginStatus()
					? (<props.component {...data}></props.component>) 
					: (<Redirect to={{pathname: '/'}} />)} >

		</Route>	
	);
};

export default SecureRoute;

{/*

<div>
	{ loginStatus ? <h1>Logged in</h1> : <h1>Not logen</h1> }
</div>


<Route path={props.path} 
		render={data => authentication.getLoginStatus() 
			? (<props.component {...data}></props.component>) 
			: (<Redirect to={{pathname: '/'}} />)} >

</Route>

*/}