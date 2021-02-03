import CarForm from './CarForm';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Cars from './Cars';

function LayoutAdmin () {
	return (
		<div>
			<div className="admin_header">
				<h1>Admin Panel</h1>
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
					<h1>Admin Content here</h1>
					<CarForm />
					<Cars />
				</div>
			</div>

		</div>
	);
}

export default LayoutAdmin;