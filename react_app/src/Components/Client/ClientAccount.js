import { useState, useEffect } from 'react';
import axios from 'axios';

const ClientAccount = () => {

	const userName = localStorage.getItem('userName');

	const [rentedCar, setRentedCar] = useState({});

	useEffect(() => {
		axios.get('http://localhost:3001/');
	}, []);

	return (

	<div>
		<h1>{ userName } Page</h1>
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
};

export default ClientAccount;