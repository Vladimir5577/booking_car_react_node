import { useState, useEffect } from 'react';
import axios from 'axios';

const Contacts = () => {

	const [key, setKey] = useState('');
	const [value, setValue] = useState('');
	const [order, setOrder] = useState('');
	const [errKey, setErrKey] = useState('');
	const [errValue, setErrValue] = useState('');
	// const [errOrder, setErrOrder] = useState('');
	const [isValid, setIsValid] = useState(true);
	const [messageInfo, setMessageInfo] = useState('');
	const [contactsData, setContactsData] = useState([]);

	const keyInput = e => {
		setKey(e.target.value);
	};
	
	const valueInput = e => {
		setValue(e.target.value);
	};

	useEffect(() => {
		const fetchData = async () => {
			await axios.get('http://localhost:3001/admin/contacts/get_contacts')
				.then((response) => {
					setContactsData(response.data);
					console.log(response.data);
				});
		};
		fetchData();
	}, []);

	// const orderInput = e => {
	// 	setOrder(e.target.value);
	// };

	const submitCreate = e => {

		if (key === '') {
			setErrKey('Key is required');
			setIsValid(false);
		} else {
			setErrKey('');
			setIsValid(true);
		}

		if (value === '') {
			setErrValue('Value is required');
			setIsValid(false);
		} else {
			setErrValue('');
			setIsValid(true);
		}

		if (isValid && key !== '' && value !== '') {
			console.log(123);
			e.preventDefault();
			const formData = new FormData();
			formData.append('key', key);
			formData.append('value', value);

			try {
				axios.post('http://localhost:3001/admin/contacts/add_contact',
					formData, {
						deaders: {
							'Content-Type': 'text/html'
						}
					}).then((response) => {
						console.log(response);
						setMessageInfo(response.data.message);
					});
			} catch(e) {
				console.log(e);
			}
		}
	};

	const deleteContact = async id => {
		await axios('http://localhost:3001/admin/contacts/delete/' + id)
			.then((response) => {
				console.log(response.data.message);
				setMessageInfo(response.data.message);
			});
	};

	return (
		<div>
			<h1>Contacts Page</h1>
			{ messageInfo && <h2 style={{ color: 'green' }} >{ messageInfo }</h2> }
			<div>
				<label>Key</label>
			</div>	
			<div className="car_form_input">
				<input type="text" onChange={keyInput} />
				{ errKey && <h3 style={{ color: 'red' }} >{ errKey }</h3> }
			</div>
			<br />
			<div>
				<label>Value</label>
			</div>	
			<div className="car_form_input">
				<input type="text" onChange={valueInput} />
				{ errValue && <h3 style={{ color: 'red' }} >{ errValue }</h3> }
			</div>
			<br />
			{/*<div>
				<label>Order to show</label>
			</div>	
			<div className="car_form_input">
				<input type="number" onChange={orderInput} />
			</div>*/}
			<br />
			<div>
				<button onClick={submitCreate} className="submit_button" >Submit</button>
			</div>	

			<table cellSpacing="8">
				<thead>
					<tr>
						<td>Key</td>
						<td>Value</td>
						<td>Action</td>
					</tr>
				</thead>
				<tbody>
					{
						contactsData.map(contact => {
							return (
								<tr key={ contact._id }>
									<td>{ contact.key }</td>
									<td>{ contact.value }</td>
									<td>
										<button onClick={ e => deleteContact(contact._id) } >Delete</button>
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

export default Contacts;