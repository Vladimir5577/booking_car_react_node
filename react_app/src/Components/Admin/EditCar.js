import { useState } from 'react';
import axios from 'axios';
// import { Link, Route } from 'react-router-dom';

function EditCar (props) {

	const [previewImage, setPreviewImage] = useState(props.location.image);

	// input group
	const [file, setFile] = useState('');
	const [title, setTitle] = useState(props.location.car.title);
	const [description, setDescription] = useState(props.location.car.description);
	const [message, setMessage] = useState(false);

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

	const submitUpdate = async e => {
		e.preventDefault();
		const id = props.location.car._id;

		const formData = new FormData();

		if (file) {
			setFile(file);
			formData.append('file', file);
		} 

		formData.append('title', title);
		formData.append('description', description);

		try {
			await axios.patch('http://localhost:3001/admin/car/update_car/' + id, 
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
	};

	return (
		<div className="car_form">

			<h1>Edit a car</h1>

			{ message && <h2 style={{ color: 'green' }}>Record updated successfully</h2> }
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
			</div>
			<br />
			<div>
				<label>Title</label>
			</div>	
			<div className="car_form_input" >
				<input type="text" value={title} onChange={inputTitle} />
			</div>
			<br />
			<div>
				<label>Description</label>
			</div>	
			<div className="car_form_input">
				<textarea rows="10" value={description} onChange={inputDescription} ></textarea>
			</div>
			<br />
			<div>
				<button onClick={submitUpdate} className="submit_button" >Edit</button>
			</div>	

			

		</div>
	)

}

export default EditCar;