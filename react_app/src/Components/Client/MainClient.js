import { useState, useEffect } from 'react';
import axios from 'axios';

const MainClient = () => {

	const [carsData, setCarsData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('http://localhost:3001/client/car/get_cars');
			console.log(result.data);
			setCarsData(result.data);
		};
		fetchData();
	}, []);

	return (
		<div>
			<h1>Available Cars</h1>

			{

				carsData.map(car => {
					let image_path = 'http://localhost:3001/uploads/' + car.image;

					return (
						<div className="card">
							<div class="card_image">
								<img src={ image_path } />
							</div>
							<div class="card_text">
								<h2>Model: { car.model }</h2>
								<h3>Car: { car.title }</h3>
								<p>{ car.description }</p>
							</div>
						</div>
					);
				})
			}

		</div>
	);
};

export default MainClient;