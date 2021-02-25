import { useState, useEffect } from 'react';
import axios from 'axios';

const UsersAdmin = () => {

	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('http://localhost:3001/admin/users/get_users');
			setUsers(result.data);
			console.log(result.data);
		};

		fetchData();
	}, []);

	return (
		<div>
			<h1>Users Page</h1>
			<table border="3" cellPadding="5" celspacing="0">
				<thead>
					<tr>
						<td>Name</td>
						<td>Email</td>
					</tr>
				</thead>
				<tbody>
					{
						users.map(user => {
							return (
								<tr key={ user._id }>
									<td>{ user.name }</td>
									<td>{ user.email }</td>
								</tr>
							);
						})
					}
				</tbody>
			</table>
		</div>
	);
}

export default UsersAdmin;