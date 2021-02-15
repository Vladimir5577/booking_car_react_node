import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from 'react-router-dom';

import MainClient from './MainClient';
import HomeClient from './HomeClient';
import ContactsClient from './ContactsClient';
import AboutClient from './AboutClient';

 
const LayoutClient = () => {

	const { url, path } = useRouteMatch();

	return (

	<div>
		<Router>
			<div className="header">
				<div className="container">
					<Link to={`${path}`} className="nav_button">
						<h1>Booking Car Web Site</h1>
					</Link>
					<div className="auth_block">
						<Link to={`${path}home`} className="nav_button">
							Home
						</Link>
						<Link to={`${path}about`} className="nav_button">
							About
						</Link>
						<Link to={`${path}contacts`} className="nav_button">
							Contacts
						</Link>
						<Link to="/login" className="nav_button">
							Login
						</Link>
					</div>
				</div>
			</div>
			<div className="body">
				<div className="body_container">
			{/*		<div>
						<h1>On our web site you can rent any awailable car</h1>
					</div>*/}

					<Switch>
						<Route exec path={`${path}/`} component={ MainClient } ></Route>
						<Route path={`${path}home`} component={ HomeClient } ></Route>
						<Route path={`${path}about`} component={ AboutClient } ></Route>
						<Route path={`${path}contacts`} component={ ContactsClient } ></Route>
					</Switch>
				</div>
			</div>
		</Router>
	</div>

	);
};

export default LayoutClient;