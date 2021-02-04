import CarForm from './CarForm';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';

import IntroAdmin from './IntroAdmin';
import UsersAdmin from './UsersAdmin';
import Orders from './Orders';
import Contacts from './Contacts';
import Cars from './Cars';

function LayoutAdmin () {

	const navStyle = {
		color: 'white'
	};

	return (
		<div>
			<Router>
				<div className="admin_header">
					<Link to="/admin" style={ navStyle }>
						<h1>Admin Panel</h1>
					</Link>
				</div>
				<div className="admin_content">
					<div className="admin_sidebar">
						<ul>
							<Link to='/admin/cars/' style={ navStyle }>
								<li>Cars</li>
							</Link>
							<Link to='/admin/users' style={ navStyle }>
								<li>Users</li>
							</Link>
							<Link to='/admin/orders' style={ navStyle }>
								<li>Orders</li>
							</Link>
							<Link to='/admin/contacts' style={ navStyle }>
								<li>Contacts</li>
							</Link>
						</ul>
					</div>
					<div className="admin_container">
						<Switch>
							<IntroAdmin exact path="/admin" />
							<Cars path="/admin/cars" />
							<CarForm path="/admin/car_create" />
							<UsersAdmin path="/admin/users" />
							<Orders path="/admin/orders" />
							<Contacts path="/admin/contacts" />
						</Switch>
					</div>
				</div>
			</Router>
		</div>
	);
}

export default LayoutAdmin;