import { useState, useEffect } from 'react';

const Contacts = () => {

	const [key, setKey] = useState('');
	const [value, setValue] = useState('');
	const [order, setOrder] = useState('');
	const [errKey, setErrKey] = useState('');
	const [errValue, setErrValue] = useState('');
	// const [errOrder, setErrOrder] = useState('');
	const [isValid, setIsValid] = useState(true);

	const keyInput = e => {
		setKey(e.target.value);
	};
	
	const valueInput = e => {
		setValue(e.target.value);
	};

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
			console.log('blaasdfaa');
		}

	};

	return (
		<div>
			<h1>Contacts Page</h1>

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
		</div>
	);
}

export default Contacts;