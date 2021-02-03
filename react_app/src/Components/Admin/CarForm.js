import { useState } from 'react';
import axios from 'axios';

function CarForm () {
	
	const [previewImage, setPreviewImage] = useState('');

	// inpu group
	const [file, setFile] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

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

	const submitCreate = async e => {
		const formData = new FormData();
		formData.append('file', file);
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
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className="car_form">
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
				<input type="text" onChange={inputTitle} />
			</div>
			<br />
			<div>
				<label>Description</label>
			</div>	
			<div className="car_form_input">
				<textarea rows="10" onChange={inputDescription} ></textarea>
			</div>
			<br />
			<div>
				<button onClick={submitCreate} >Create</button>
			</div>	
		</div>
	)

}

export default CarForm;