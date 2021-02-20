import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch, Redirect } from 'react-router-dom';

import IntroAdmin from './IntroAdmin';
import UsersAdmin from './UsersAdmin';
import OrdersAdmin from './OrdersAdmin';
import ContactsAdmin from './ContactsAdmin';
import CarsAdmin from './CarsAdmin';
import CarForm from './CarForm';
import EditCar from './EditCar';
import ModelsCarsAdmin from './ModelsCarsAdmin';

function LayoutAdmin (props) {

	const navStyle = {
		color: 'white',
		textDecoration: 'none'
	};

	const logout = () => {
		localStorage.clear()
	    props.setLoginStatus(false);
	};

	const { url, path } = useRouteMatch();
	console.log(url, path);

	if (props.loginStatus) {

	return (
		<div>
			<Router>
				<div className="admin_header">
					<Link to="/admin" style={ navStyle }>
						<h1>Admin Panel</h1>
					</Link>
					<p className="logout_button" onClick={logout} >Logout</p>
				</div>
				<div className="admin_content">
					<div className="admin_sidebar">
						<ul>
							<Link to={`${path}/cars`} style={ navStyle }>
								<li>Cars</li>
							</Link>
							<Link to={`${path}/models`} style={ navStyle }>
								<li>Models</li>
							</Link>
							<Link to={`${path}/users`} style={ navStyle }>
								<li>Users</li>
							</Link>
							<Link to={`${path}/orders`} style={ navStyle }>
								<li>Orders</li>
							</Link>
							<Link to={`${path}/contacts`} style={ navStyle }>
								<li>Contacts</li>
							</Link>

						</ul>
					</div>
					<div className="admin_container">
						<Switch>
							<IntroAdmin exact path="/admin" />
							<Route path={ `${path}/cars` } component={ CarsAdmin } >
							</Route>
							<Route path={ `${path}/models` } component={ ModelsCarsAdmin } >
							</Route>
							<Route path={ `${path}/users` } component={ UsersAdmin } >
							</Route>
							<Route path={ `${path}/orders` } component={ OrdersAdmin } >
							</Route>
							<Route path={ `${path}/contacts` } component={ ContactsAdmin } >
							</Route>
							<Route path={ `${path}/add_car` } component={ CarForm } >
							</Route>
							<Route path={ `${path}/edit_car` } component={ EditCar } >
							</Route>

						</Switch>
					</div>
				</div>
			</Router>
		</div>
	);

	} else {
		return <Redirect to="/admin/login" />
	}
}

export default LayoutAdmin;