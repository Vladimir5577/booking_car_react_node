import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useRouteMatch, Route } from 'react-router-dom';
import CarForm from './CarForm';

function Cars () {

	const [carsData, setCarsData] = useState([]);
	const [messageInfo, setMessageInfo] = useState('');
	const { url, path } = useRouteMatch();

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('http://localhost:3001/admin/car/get_cars');
			setCarsData(result.data);
			console.log(result.data);
		};
		fetchData();
	}, []);

	// Edit
	const editCar = async (id, image_path) => {

	};

	// Delete 
	const deleteCar = async id => {
		console.log(id);
		const car = await axios('http://localhost:3001/admin/car/delete/' + id);
		console.log(car.data.message);
		setMessageInfo(car.data.message);
	};

	return (
		<div>
			{ messageInfo && <h1>{ messageInfo }</h1> }
			<h1>Car Database</h1>

			<Link to="/admin/add_car">
				<button className="submit_button" >Add a car</button>
			</Link>

			<table border="5" cellPadding="5" celspacing="0">
				<thead>
					<tr>
						<td>Image</td>
						<td>Model</td>
						<td>Title</td>
						<td>Description</td>
						<td></td>
					</tr>
				</thead>

				<tbody>
					{
						carsData.map(car => {
							let image_path = 'http://localhost:3001/uploads/' + car.image;
							return (
								<tr key={ car._id } >
									<td><img src={ image_path } style={{ height: 100 }} alt="img" /></td>
									<td>{ car.model }</td>
									<td>{ car.title }</td>
									<td>{ car.description }</td>
									<td>
										<Link to={{
											pathname: "/admin/edit_car",
											car: car,
											image: image_path
										}} >
											<button onClick={e => editCar(car._id, image_path)} >Edit</button>
										</Link>
										<button onClick={ e => deleteCar(car._id) } >Delete</button>
									</td>
								</tr>
							);
						})
					}
				</tbody>
			</table>

			<Route path={ `${path}/add_car` } component={ CarForm } />
		</div>
	);
}

export default Cars