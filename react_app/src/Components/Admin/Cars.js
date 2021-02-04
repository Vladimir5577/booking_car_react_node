import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Cars () {

	const [carsData, setCarsData] = useState([]);
	const [messageInfo, setMessageInfo] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('http://localhost:3001/admin/car/get_cars');
			setCarsData(result.data);
			console.log(result.data);
		};
		fetchData();
	}, []);

	// Edit
	const editCar = async id => {

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

			<Link to="/admin/car_create">
				<button className="submit_button" >Add car</button>
			</Link>

			<table border="5" cellPadding="5" celspacing="0">
				<thead>
					<tr>
						<td>Image</td>
						<td>Title</td>
						<td>Description</td>
						<td></td>
					</tr>
				</thead>

				<tbody>
					{
						carsData.map(car => {
							let image_path = 'http://localhost:3000/uploads/' + car.image;
							return (
								<tr key={ car._id } >
									<td><img src={ image_path } style={{ height: 100 }} alt="img" /></td>
									<td>{ car.title }</td>
									<td>{ car.description }</td>
									<td>
										<button onClick={e => editCar(car._id, image_path)} >Edit</button>
										<button onClick={ e => deleteCar(car._id) } >Delete</button>
									</td>
								</tr>
							);
						})
					}
				</tbody>
			</table>
		</div>
	);
}

export default Cars