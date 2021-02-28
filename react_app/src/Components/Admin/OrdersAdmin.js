import { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = () => {

	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('http://localhost:3001/admin/users/get_users');
			setUsers(result.data);
			console.log(result.data);
		};

		fetchData();
	}, []);

	async function rentedCar (id) {

		const result = axios('http://localhost:3001/admin/car/get_car/' + id);
		console.log(result.data, '======================================');
		// return '123';
		return result.data;
	};

	return (
		<div>
			<h1>Orders</h1>
			<table border="3" cellPadding="5" celspacing="0">
				<thead>
					<tr>
						<td>Name</td>
						<td>Email</td>
						<td>Car</td>
					</tr>
				</thead>
				<tbody>
					{
						users.map(user => {
							return (
								<tr key={ user._id }>
									<td>{ user.name }</td>
									<td>{ user.email }</td>
									<td>{ rentedCar(user.rentCar) }</td>
								</tr>
							);
						})
					}
				</tbody>
			</table>
		</div>
	);
}

export default Orders;