import { useState, useEffect } from 'react';
import axios from 'axios';

const ContentClient = () => {

	const [carsData, setCarsData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('http://localhost:3001/admin/car/get_cars');
			setCarsData(result.data);
			console.log(result.data);
		};
		fetchData();
	}, []);

	console.log(carsData);

	return (
		<div>
		


		<div className="card">
			<div className="card_img">
				<img src="" />
			</div>
			<div className="card_description">
				<div className="card_title">
					
				</div>
				<div className="card_description">
					
				</div>
			</div>
		</div>

		
		</div>
	);
};

export default ContentClient;