import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';

function CarForm () {
	
	const [previewImage, setPreviewImage] = useState('');

	// input group
	const [file, setFile] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [message, setMessage] = useState(false);
	const [models, setModels] = useState([]);
	const [selectModel, setSelectModel] = useState('');
	const [errSelectFile, setErrSelectFile] = useState('');
	const [errSelectModel, setErrSelectModel] = useState('');
	const [errTitle, setErrTitle] = useState('');
	const [errDescription, setErrDescription] = useState('');
	const [isValid, setIsValid] = useState(true);

	const inputFile = e => {
		setPreviewImage(URL.createObjectURL(e.target.files[0]));
		setFile(e.target.files[0]);
	};

	const inputTitle = e => {
		setTitle(e.target.value);
	};

	const inputDescription = e => {
		setDescription(e.target.value);
	};

	useEffect(() => {
		const fetchData = async () => {
			await axios('http://localhost:3001/admin/car_models/get_models')
				.then((result) => {
					console.log(result.data);
					setModels(result.data);
				});
		};
		fetchData();
	}, []);

	const submitCreate = async e => {

		if (file === '') {
			setErrSelectFile('Image is required');
			setIsValid(false);
		} else {
			setErrSelectFile('');
			setIsValid(true);
		}

		if (selectModel === '') {
			setErrSelectModel('Choose a model');
			setIsValid(false);
		} else {
			setErrSelectModel('');
			setIsValid(true);
		}

		if (title === '') {
			setErrTitle('Title is required');
			setIsValid(false);
		} else {
			setErrTitle('');
			setIsValid(true);
		}

		if (description === '') {
			setErrDescription('Description is required');
			setIsValid(false);
		} else {
			setErrDescription('');
			setIsValid(true);
		}


		if (isValid && selectModel !== '' && title !== '' && description !== '') {
			e.preventDefault();
			const formData = new FormData();
			formData.append('file', file);
			formData.append('model', selectModel);
			formData.append('title', title);
			formData.append('description', description);

			try {
				await axios.post('http://localhost:3001/admin/car/add_car', 
					formData, {
						headers: {
							'Content-Type': 'multipart/form-data'
						}
					}).then((response) => {
						console.log(response);
					}); 
						setMessage(true);
			} catch (e) {
				console.log(e);
			}
		}
	};

	return (
		<div className="car_form">

			<h1>Add a car</h1>

			{ message && <h2 style={{ color: 'green' }}>Record created successfully</h2> }
{/*
			<Link to={`${path}/add_car`}>
				<button className="submit_button" >Back</button>
			</Link>*/}

			{ previewImage && <img src={ previewImage } style={{ height: 150 }} alt="image_previews" /> }
			<div>
				<label>Image</label>
			</div>	
			<div>
				<input type="file" onChange={inputFile} />
				{ errSelectFile && <h3 style={{ color: 'red' }} >{ errSelectFile }</h3> }
			</div>
			<br />
			<div className="car_form_input" >
				<select onChange={e => setSelectModel(e.target.value)} >
					<option value="" >Chose the model</option>
					{
						models.map(model => {
							return (
								<option value={ model.model } >{ model.model }</option>
							);
						})
					}
				</select>
				{ errSelectModel && <h3 style={{ color: 'red' }} >{ errSelectModel }</h3> }
			</div>
			<br />
			<div>
				<label>Title</label>
			</div>	
			<div className="car_form_input" >
				<input type="text" onChange={inputTitle} />
				{ errTitle && <h3 style={{ color: 'red' }} >{ errTitle }</h3> }
			</div>
			<br />
			<div>
				<label>Description</label>
			</div>	
			<div className="car_form_input">
				<textarea rows="10" onChange={inputDescription} ></textarea>
				{ errDescription && <h3 style={{ color: 'red' }} >{ errDescription }</h3> }
			</div>
			<br />
			<div>
				<button onClick={submitCreate} className="submit_button" >Create</button>
			</div>	

			

		</div>
	)

}

export default CarForm;