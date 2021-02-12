import { useState, useEffect } from 'react';
import axios from 'axios';

const ModelsCarsAdmin = () => {
	
	const [model, setModel] = useState('');
	const [carModelsData, setCarModelsData] = useState([]);
	const [messageInfo, setMessageInfo] = useState('');
	const [errValidateModel, setErrValidateModel] = useState('');

	const inputModel = e => {
		setModel(e.target.value);
	};

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('http://localhost:3001/admin/car_models/get_models');
			setCarModelsData(result.data);
			console.log(result.data);
		};

		fetchData();
	}, []);

	const submitCreate = async e => {

		if (model === '') {
			setErrValidateModel('Model is required');
		} else {
			setErrValidateModel('');
		}

		if (model !== '') {
			e.preventDefault();
			const formData = new FormData();
			formData.append('model', model);

			try {
				axios.post('http://localhost:3001/admin/car_models/add_model', 
					formData, {
						headers: {
							'Content-Type': 'text/html'
						}
					}).then((response) => {
						console.log(response);
						setMessageInfo(response.data.message);
					});
			} catch (e) {
				console.log(e);
			}
		}
	};

	const deleteModel = async id => {
		console.log(id);

		const model = await axios('http://localhost:3001/admin/car_models/delete/' + id)
			.then((response) => {
				console.log(response.data.message);
				setMessageInfo(response.data.message);
			});
	};

	return (
		<div>
			<h1>Models Cars</h1>
			{ messageInfo && <h2 style={{ color: 'green' }} >{ messageInfo }</h2> }
			<br />
			<br />
			<div className="car_form_input">
				<h3>Add model:</h3>
				<input type="text" onChange={inputModel} />
				{ errValidateModel && <h3 style={{ color: 'red' }} >{ errValidateModel }</h3> }
			</div>
			<button onClick={submitCreate} className="submit_button">Submit</button>

			<br />
			<br />

			<table cellspacing="8">
				<thead>
					<tr>
						<td>Model</td>
						<td>Action</td>
					</tr>
				</thead>
				<tbody>
					{
						carModelsData.map(model => {
							return (
								<tr key={ model._id }>
									<td>{ model.model }</td>
									<td>
										<button onClick={ e => deleteModel(model._id) } >Delete</button>
									</td>
								</tr>
							);
						})
					}
				</tbody>
			</table>

		</div>
	);
};

export default ModelsCarsAdmin;