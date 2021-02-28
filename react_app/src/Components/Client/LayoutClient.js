import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from 'react-router-dom';

import MainClient from './MainClient';
import HomeClient from './HomeClient';
import ContactsClient from './ContactsClient';
import AboutClient from './AboutClient';
import LoginClient from './Auth/LoginClient';
import RegisterClient from './Auth/RegisterClient';
 
const LayoutClient = props => {

	const { url, path } = useRouteMatch();
	let loginButton;
	// const userRentCar = props.userRentCar;
	const [userRentCar, setUserRentCar] = useState(localStorage.getItem('userRentCar'));

	const logout = () => {
		localStorage.clear();
		props.setUserLoginStatus(false);
	};

	const clientName = localStorage.getItem('userName');

	const clientAccount = () => {};

	if (props.userLoginStatus) {
		loginButton = (
			<div>
				<Link onClick={clientAccount} className="nav_button_logout">
					<p>{ clientName } profile</p>
				</Link>
				<Link onClick={logout} className="nav_button_logout">
					Logout
				</Link>
			</div>
		);
	} else {
		loginButton = (
			<Link to={`${path}login`} className="nav_button">
				Login
			</Link>
		);
	}

	return (

	<div>
		<Router>
			<div className="header">
				<div className="container">
					<Link to={`${path}`} className="nav_button">
						<h1>Booking Car Web Site</h1>
					</Link>
					<div className="auth_block">
						<div>
							<Link to={`${path}home`} className="nav_button">
								Home
							</Link>
						</div>
						<div>
							<Link to={`${path}about`} className="nav_button">
								About
							</Link>
						</div>
						<div>
							<Link to={`${path}contacts`} className="nav_button">
								Contacts
							</Link>
						</div>
						<div  className="login_group">
							{ loginButton }
						</div>
					</div>
				</div>
			</div>
			<div className="body">
				<div className="body_container">
			{/*		<div>
						<h1>On our web site you can rent any awailable car</h1>
					</div>*/}

					<Switch>
						<Route exec path={`${path}/`} component={() => <MainClient  
								userLoginStatus={props.userLoginStatus} 
								setUserLoginStatus={props.setUserLoginStatus} 
								user={props.user}
								userRentCar={props.userRentCar}
								userRentCar={userRentCar}
		    					setUserRentCar={setUserRentCar}
							/> } ></Route>
						<Route path={`${path}home`} component={ HomeClient } ></Route>
						<Route path={`${path}about`} component={ AboutClient } ></Route>
						<Route path={`${path}contacts`} component={ ContactsClient } ></Route>
						<Route path={`${path}login`} component={() => <LoginClient userLoginStatus={props.userLoginStatus} setUserLoginStatus={props.setUserLoginStatus} /> } ></Route>
						<Route path={`${path}register`} component={ RegisterClient } ></Route>
					</Switch>
				</div>
			</div>
		</Router>
	</div>

	);
};

export default LayoutClient;