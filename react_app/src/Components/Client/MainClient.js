import { useState, useEffect } from 'react';
import axios from 'axios';

const MainClient = props => {

	console.log(props, 'Props -----------');

	const [carsData, setCarsData] = useState([]);

	const userName = localStorage.getItem('userName');

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('http://localhost:3001/client/car/get_cars');
			console.log(result.data);
			setCarsData(result.data);
		};
		fetchData();
		console.log('Data from useEffect 123');
	}, []);

	const rentCar = id => {
		const userEmail = localStorage.getItem('userEmail');
		axios.patch('http://localhost:3001/client/car/rent_car', {
			userEmail: userEmail,
			carId: id
		}).then(response => {
			console.log(response.data);
			if (!localStorage.getItem('userRentCar')) {
				localStorage.setItem('userRentCar', id);
			}
		});
	};

	return (
		<div>
			<h1>Available Cars</h1>
			{
				!props.userLoginStatus ? <h3>To rent a car you need to register</h3> : <h3>Hi { userName } you can rent only one car</h3>
			}

			{

				carsData.map(car => {
					let image_path = 'http://localhost:3001/uploads/' + car.image;

					return (
						<div className="card" key={car._id} >
							<div className="card_image">
								<img src={ image_path } />
							</div>
							<div className="card_text">
								<h2>Model: { car.model }</h2>
								<h3>Car: { car.title }</h3>
								<p>{ car.description }</p>
								{
									props.userLoginStatus 
									&& <button onClick={() => rentCar(car._id)} className="order_button">Rent a car</button>
								}
								
							</div>
						</div>
					);
				})
			}

		</div>
	);
};

export default MainClient;