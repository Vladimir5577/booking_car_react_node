import { useState } from 'react';
import axios from 'axios';

const ModelsCarsAdmin = () => {
	
	const [model, setModel] = useState('');

	const inputModel = e => {
		setModel(e.target.value);
	};

	const submitCreate = async e => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('model', model);

		try {
			axios.get('http://localhost:3001/admin/car_models/add_model', 
				formData, {
					headers: {
						'Content-Type': 'text/html'
					}
				}).then((response) => {
					console.log(response);
				});
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div>
			<h1>Models Cars</h1>
			<br />
			<div className="car_form_input">
				<input type="text" onChange={inputModel} />
			</div>
			<button onClick={submitCreate} className="submit_button">Submit</button>
		</div>
	);
};

export default ModelsCarsAdmin;