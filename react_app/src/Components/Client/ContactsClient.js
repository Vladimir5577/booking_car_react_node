import { useState, useEffect } from 'react';
import axios from 'axios';

const ContactsClient = () => {

	const [contactsData, setContactsData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('http://localhost:3001/client/contacts/get_contacts');
			console.log(result.data);
			setContactsData(result.data);
		};
		fetchData();
	}, []);

	return (
		<div className="contacts_page">

			<div className="contacts_info">
				<br />
				<h1>Contacts Page</h1>
				<br />

				{
					contactsData.map(contact => {
						return (
							<p key={contact._id} >{contact.key}: <strong>{contact.value}</strong></p>
						);
					})
				}

			</div>
		</div>
	);
};

export default ContactsClient;